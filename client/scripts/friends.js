var Friends = {

  myFriends: [],

  toggleStatus: function() {
    Friends.status = true;
    Friends.myFriends.push(this.id);
  },
    
  status: false

};