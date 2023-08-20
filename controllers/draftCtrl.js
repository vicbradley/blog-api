const Post = require('../models/post');
const Comment = require('../models/comments');
const asyncHandler = require("express-async-handler");
const { format } = require ('date-fns');

// const { body, validationResult } = require("express-validator");

// exports.admin = asyncHandler(async (req, res, next) => {
//     const allPost = await Post.find().exec();
//     res.render("index", {posts: allPost})
// })

exports.post_list = asyncHandler(async (req, res, next) => {
  const allPost = await Post.find().exec();
  res.render('draft', {posts: allPost});  
})

exports.create_get = asyncHandler(async (req, res, next) => {
  res.render('draft-form', {post: {}});  
})

exports.create_post = asyncHandler(async (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    publish: req.body.publish ? true : false
  })

  await post.save();
  res.redirect("/draft")
})

exports.update_post_get = asyncHandler(async (req, res, next) => {
    const spesificPost = await Post.findById(req.params.id);

    res.render('draft-form', {post: spesificPost});
})

exports.update_post_post = asyncHandler(async (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    publish: req.body.publish ? true : false,
    _id: req.params.id,
  })
  
  await Post.findByIdAndUpdate(req.params.id, post, {});
  res.redirect("/draft")
})