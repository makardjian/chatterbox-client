var Messages = {
  
  addMessage: function(event) {
    var messageObj = {
      username: App.username,
      text: $('#message').val(),
      roomname: RoomsView.currentRoom
    };
    
    Parse.create(messageObj, 
      function() {
        $('#chats').prepend(MessagesView.renderMessage(messageObj));
        $('#message').val('');
      },
      function() {
        alert('No connection to server');
      });
  
  }

};