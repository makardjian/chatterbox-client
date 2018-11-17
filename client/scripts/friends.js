var Friends = {

  myFriends: [],

  toggleStatus: function() {
    Friends.status = true;
    Friends.myFriends.push(this.id);
    console.log('is this working?');
  },
    
  status: false

};