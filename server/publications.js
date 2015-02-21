
Meteor.publish('posts', function(){
	return Posts.find();
});

Meteor.publish('rootCats', function(){
  return RootCats;
});

Meteor.publish('houseAndHomeUsers', function(){
  return HouseAndHomeUsers.find();
});