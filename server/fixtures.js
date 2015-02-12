
if(Posts.find().count === 0){
	
	Posts.insert({
		title: 'Introducing Telescope',
		url: 'http://www.oo.com/test'
	});
	
	Posts.insert({
		title: 'Meteor',
		url: 'http://www.meteor.com'
	});

	Posts.insert({
		title: 'Meteor',
		url: 'http://www.meteor.com'
	});

}