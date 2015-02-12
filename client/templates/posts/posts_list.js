
var postsData= [
  {
    title: 'Introducing Telescope',
    url: 'http://www.google.com/hunkey-dory'
  },
  {
    title: 'Meteor',
    url: 'http://www.metero.com'
  }
];

Template.postsList.helpers({
  posts: function(){
    return Posts.find();
  }
});