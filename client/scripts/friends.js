var Friends = {

  myFriends: [],

  initialize: function() {
    $('.username').on('click', function(event) {
      var clickedUser = event.target.classList[1];
      var clickedUserElements = document.getElementsByClassName(clickedUser);
      for (var i = 0; i < clickedUserElements.length; i++) {
        $(`.chat .${clickedUser}`).parent().addClass('friend');
      }
      Friends.myFriends.push(clickedUser);
    });
    Friends.toggleStatus();
  },
  
  toggleStatus: function() {}

};