
Template.postItem.helpers({
	domain: function(){
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	},
	pathname: function(){
		var a = document.createElement('a');
		a.href = this.url;
		return a.pathname;
	}
});