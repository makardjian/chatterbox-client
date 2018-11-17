var Messages = {
  
  addMessage: function() {
    var messageObj = {
      username: App.username,
      text: $('#message').val(),
      roomname: 'dummy'
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