const Post = require('../models/post');

exports.getAll_get = async (req, res) => {
    const allPosts = await Post.getAll();
    console.log(allPosts);
    res.render('template', { 
        locals: {
            title: "Posts",
            is_logged_in: req.session.is_logged_in,
            PostList: allPosts,
            first_name: req.session.first_name,
            user_id: req.session.user_id
        },
        partials:{
            partial: 'partial-index'
        }
    });
};

exports.getOne_get = async (req, res) => {
    const post_id= req.params.post_id;
    const onePost = await Post.getOne(post_id);
    const PostInstance = new Post(post_id, null, null, null, null);
    const PostComments = await PostInstance.getAllComments();
    console.log(PostComments);

    console.log(onePost);
    res.render('template', { 
        locals: {
            title: "",
            is_logged_in: req.session.is_logged_in,
            onePostList: onePost,
            first_name: req.session.first_name,
            user_id: req.session.user_id,
            post_id: req.params.post_id,
            commentData: PostComments
        },
        partials:{
            partial: 'partial-subReddit'
        }
    });
};

exports.addComment_post = (req, res) => {
    console.log("review post", req.body);
    const { comments, subReddit_id, user_id, post_id } = req.body;

    Book.addChat( comments, subReddit_id, user_id, post_id).then(response => {
        console.log(response)
        req.session.first_name = first_name;
        console.log("first name is",first_name);
        req.session.user_id = user_id;
        console.log("User ID is", user_id)
        req.params.subReddit_id = subReddit_id;
        console.log("SubReddit ID is", SubReddit_id);
        req.params.post_id = post_id;
        console.log("Post ID is", post_id);
        res.redirect(`/subReddits`);
    });
};