var Messages = {
  
  addMessage: function(userInput) {

    Parse.create($('#message').val(), 
      function() {
        $('#chats').prepend();
        $message.val('');
      },
      function() {
        alert('No connection to server');
      });
  
  }

};