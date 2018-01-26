let postcontainer = $("#post-container");
let newpostcontainer = $("#create");
// $(newpostcontainer).hide();
let serverurl = "http://localhost:8080/";
let postsAPI = serverurl + "posts";

$("#btnSave").click(function() {
  let title = $("#newtitle").val();
  let content = $("#newpostbody").val();
  let imgURL = $("#newimgURL").val();
  let datetime = Date.now();

  let data = JSON.stringify({
    title: title,
    content: content,
    imgURL: imgURL,
    datetime: datetime
  });

  $.ajax({
    url: postsAPI,
    data: data,
    contentType: "application/json; charset=utf-8",
    type: "POST",
    dataType: "json",
    success: function(response) {
      if (response.status === "success") {
        console.log("Success: " + response.message);
      } else if (response.status === "error")
        console.log("Failure: " + response.message);
    }
  });
});

$.get(postsAPI, function(posts) {
  $(posts).each(function(index, post) {
    $("<div>")
      .attr("id", post.datetime)
      .attr("class", "blogposts")
      .append(
        $("<div>")
          .attr("class", "postheader")
          .append(
            $("<div>")
              .attr("class", "postinfo")
              .append(
                $("<div>")
                  .attr("class", "posttitle")
                  .html(post.title)
              )
              .append(
                $("<div>")
                  .attr("class", "postauthor")
                  .html("by Danny Dyer")
              )
          )
          .append($("<div>").attr("class", "posttags"))
      )
      .append(
        $("<div>")
          .attr("class", "postbody")
          .append(
            $("<div>")
              .attr("class", "postimage")
              .append($("<img>").attr("src", post.imageurl))
          )
          .append(
            $("<div>")
              .attr("class", "posttext")
              .html(post.description)
          )
      )
      .append($("<div>").attr("class", "postfooter"))
      .appendTo(postcontainer);
  });
});
