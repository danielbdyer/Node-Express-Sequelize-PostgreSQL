const express = require("express");
const bodyParser = require("body-parser");
let blogPosts = [];
const app = express();
app.set("port", process.env.PORT || 8080);

const BlogPost = require("./models/BlogPost");

// app.use('/css', express.static('resources'))
// https://expressjs.com/en/starter/static-files.html

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/posts", function(req, res) {
  res.json(blogPosts);
});

app.post("/posts", function(req, res) {
  let title = req.body.title;
  let content = req.body.content;
  let imgURL = req.body.imgURL;
  let datetime = req.body.datetime;
  var newBlogPost = new BlogPost(title, content, imgURL, datetime);
  blogPosts.push(newBlogPost);
  res.send("hello world");
});

app.listen(app.get("port"), () =>
  console.log("Example app listening on port " + app.get("port"))
);
