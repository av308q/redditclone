const db = require('./conn.js');

class subReddit{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    static async getAll(){
        try{
            const response = await db.any(`select * from subReddits`);
            return response;
        } catch(err){
            return err.message;
        }
    };

    static async getOne(subReddit_id){
        try{
            
            const response = await db.one(`select * from subReddits where id=${subReddit_id}`);
            const subRedditInstance = new subReddit(response.id, response.name);
        
            return subRedditInstance;
        } catch(err){
            return err.message;
        }
    }

    static async getAllChats(){
        try{
            const response = await db.any(`
            select * from 
                chats 
            where 
                subReddit_id=$1`, [this.id]
            );
            return response;

        }catch(err){
            return err.message
        }
    }

    static async addChat(content, subReddit_id, user_id) {
        try{
            const response = await db.one(`
            insert into chats
            (content, subReddit_id, user_id)
            values
                ($1, $2, $3)
            returning id
            `, [content, subReddit_id, user_id]);
            return response;
    
        } catch(err){
            return err.message;
        }
        }

}

module.exports = subReddit;