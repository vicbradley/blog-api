const Post = require('../models/post');
const Comment = require('../models/comments');
const asyncHandler = require("express-async-handler");
const { format } = require ('date-fns');

// const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
    const allPost = await Post.find({publish: true}).exec();
    res.render("index", {posts: allPost})
})

exports.post_detail = asyncHandler(async (req, res, next) => {
	const [ spesificPost, comments ] = await Promise.all([
		Post.findById(req.params.id).exec(),
		Comment.find({post: req.params.id}).exec()
	]);

	res.render("post-detail", {post: spesificPost, comments: comments});
})

exports.post_comment = asyncHandler(async (req, res, next) => {
	const post = await Post.findById(req.params.id).exec();

	const comment = new Comment({
		username: req.body.username,
		text: req.body.comment,
		date: format(new Date(), 'dd MMMM yyyy'),
		post: req.params.id,
	});

	await comment.save();
	res.redirect(post.url)
})

// exports.test = asyncHandler(async (req, res, next) => {
//     const allPost = await Post.find().exec();
  
//     const temp = [];
//     allPost.forEach(post => temp.push(post.url))
//     res.send(temp);
      
//   })
  

// exports.create = asyncHandler(async (req, res, next) => {
//     const post = new Post({
//         title: req.body.title,
//         author: req.body.author,
//         content: req.body.content
//     })
  
      
//     await post.save();

//     res.status(201).json({ message: 'Post created successfully', post });  
// })

