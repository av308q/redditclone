const Post = require('../models/post');

exports.getOnePost_get = async (req, res) => {
    const post_id= req.params.post_id;
    console.log(post_id);
    const onePost = await Post.getOnePost(post_id);
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
            subreddit_id: req.params.subReddit_id,
            commentData: PostComments
        },
        partials:{
            partial: 'partial-post'
        }
    });
};


exports.addComment_post = (req, res) => {
    console.log("review post", req.body);
    const { comments, subReddit_id, user_id, post_id } = req.body;

    Post.addComment( comments, subReddit_id, user_id, post_id).then(response => {
        console.log(response)
        req.session.first_name = first_name;
        console.log("first name is",first_name);
        req.session.user_id = user_id;
        console.log("User ID is", user_id)
        req.params.subReddit_id = subReddit_id;
        console.log("SubReddit ID is", SubReddit_id);
        req.params.post_id = post_id;
        console.log("Post ID is", post_id);
        res.redirect(`/`);
    });
};