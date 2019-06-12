const SubReddit = require('../models/subReddit');

exports.getAll_get = async (req, res) => {
    const allSubReddits = await SubReddit.getAll();
    console.log(allSubReddits);
    res.render('template', { 
        locals: {
            title: "Books in Atlanta",
            is_logged_in: req.session.is_logged_in,
            subRedditList: allSubReddits,
            first_name: req.session.first_name,
            user_id: req.session.user_id
        },
        partials:{
            partial: 'partial-subReddits'
        }
    });
};

exports.getOne_get = async (req, res) => {
    const subReddit_id= req.params.subReddit_id;
    const oneSubReddit = await SubReddit.getOne(subReddit_id);
    const subRedditInstance = new SubReddit(subReddit_id, null);
    const subRedditChats = await subRedditInstance.getAllChats();
    console.log(subRedditChats);

    console.log(oneSubReddit);
    res.render('template', { 
        locals: {
            title: "",
            is_logged_in: req.session.is_logged_in,
            oneSubRedditList: oneSubReddit,
            first_name: req.session.first_name,
            user_id: req.session.user_id,
            subReddit_id: req.params.subReddit_id,
            chatData: subRedditChats
        },
        partials:{
            partial: 'partial-one-subReddit'
        }
    });
};

exports.addChat_post = (req, res) => {
    console.log("review post", req.body);
    const { content, subReddit_id, user_id } = req.body;

    Book.addChat( content, subReddit_id, user_id).then(response => {
        console.log(response)
        req.session.first_name = first_name;
        console.log("first name is",first_name);
        req.session.user_id = user_id;
        console.log("User ID is", user_id)
        req.params.subReddit_id = subReddit_id;
        console.log("SubReddit ID is", SubReddit_id)
        res.redirect(`/subReddits`);
    });
};

