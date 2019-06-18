const db = require('./conn.js');

class Post{
    constructor(id, posts, content, subreddit_id, user_id){
        this.id = id;
        this.posts = posts;
        this.content = content
        this.subreddit_id = subreddit_id;
        this.user_id = user_id;
    }

    static async getOnePost(post_id){
        try{
            const response = await db.one(`select * from posts where id=$1`,[post_id]);
            const postInstance = new Post(response.id, response.posts, response.content, response.subreddit_id, response.user_id);
            console.log(postInstance);
            return postInstance;
        } catch(err){
            return err.message;
        }
    };

    async getAllComments(subreddit_id, post_id){
        try{
            const response = await db.any(`
            select * from 
                comments 
            where 
                subreddit_id=$1 and posts_id=$2`, [subreddit_id, post_id]
            );
            return response;

        }catch(err){
            return err.message
        }
    }

    static async addComment(comments, subreddit_id, user_id, post_id) {
        try{
            const response = await db.one(`
            insert into comments
            (comments, subreddit_id, user_id, post_id)
            values
                ($1, $2, $3, $4)
            returning id
            `, [comments, subreddit_id, user_id, post_id]);
            return response;
    
        } catch(err){
            return err.message;
        }
    };
};

module.exports = Post;

