function clearForm(){
  // Clear form
  event.target.userName.value = "";
  event.target.address.value = "";
  event.target.state.value = "";
  event.target.city.value = "";
  event.target.zip.value = "";
}

Template.houseAndHomeList.helpers({
  users: function(){
    return HouseAndHomeUsers.find({}, {sort: {createdAt: -1}});
  }
});

// Inside the if (Meteor.isClient) block, right after Template.body.helpers:
Template.houseAndHomeList.events({
  "submit .add-user-task": function (event) {
    // This function is called when the new task form is submitted
    
    var user = {
      'username' :  event.target.userName.value,
      'address' : event.target.address.value,
      'state' : event.target.state.value,
      'city' : event.target.city.value,
      'zip' : event.target.zip.value
    };

    HouseAndHomeUsers.insert({
      username: "test user",
      user: user,
      createdAt: new Date() // current time
    });

    // Clear form
    clearForm();
    
    // Prevent default form submit
    return false;
  }
});