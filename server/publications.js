
Meteor.publish('posts', function(){
	return Posts.find();
});

Meteor.publish('houseAndHomeUsers', function(){
  return HouseAndHomeUsers.find();
});