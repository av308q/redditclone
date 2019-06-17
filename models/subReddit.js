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
            const response = await db.one(`select * from subreddits where id=${subReddit_id}`);
            console.log(response);
            return response;
        } catch(err){
            return err.message;
        }
    };

    async getAllPosts(){
        try{
            const response = await db.any(`select * from posts where subreddit_id=$1`, [this.id]);
            console.log(response);
            return response;
        }catch(err){
            return err.message
        }
    };

    static async addPost(posts, content, subreddit_id, user_id){
        try{
            const response = await db.one(`
            insert into posts
            (posts, content, subreddit_id, user_id)
            values
                ($1, $2, $3, $4)
            returning id
            `, [posts, content, subreddit_id, user_id]);
            return response;
        } catch(err){
            return err.message;
        }
    }
};

module.exports = subReddit;