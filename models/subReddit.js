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
};

module.exports = subReddit;