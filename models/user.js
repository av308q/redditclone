const db = require('./conn.js');

class User{
    constructor(id, first_name, last_name, user_name, password, subReddits){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.userName = user_name;
        this.password = password;
        this.subReddits = subReddits;
    }


    async save() {
        try{
        const response = await db.one(`
        insert into users
        (first_name, last_name, user_name, password)
        values
            ($1, $2, $3, $4)
        returning id
        `, [this.first_name, this.last_name, this.user_name, this.password]);
        return response;

        } catch(err){
            return err.message
        }
    }

    async getUserByUserName(){
        try{
            const userData = await db.one(`
                select id, first_name, last_name, password
                    from users
                where user_name = $1`,[this.user_name]);
            return userData;
        } catch(err){
            return err.message;
        }
    }

    static async getAllUsers(){
        try{
            const response = await db.any(`
                select * from users
                `);
            return response;
        } catch(err){
            return err.message;
        }
    };

};

module.exports = User;