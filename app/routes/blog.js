import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return $.ajax({
    url: "http://cors.io/?u=https://medium.com/feed/@hdwatts",
    crossDomain:true,
    dataType:"xml"
    }).then(function(jsonData){
        var channel = jsonData.children[0].children[0];
        var posts = [];
        for(var x = 0; x < channel.children.length; x++){
          if (channel.children[x].tagName === "item") {
            var post = channel.children[x];
            var title = post.children[0].textContent;
            var description = post.children[1].textContent;
            var link = post.children[2].textContent;
            var date = post.children[5].textContent;
            posts.push({title:title, description:description, link:link, date:date, isBlogPost:true});
          }
        }

        return posts;
    });
  },
  afterModel() {
    $(document).attr('title', 'Blog | Howard Dean Watts');
  }
});
