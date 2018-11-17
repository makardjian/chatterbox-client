var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('#send').submit(Messages.addMessage);
    $('.username').on('click', Friends.toggleStatus);
    
  },

  renderMessage: function(message) {
    MessagesView.$chats.prepend(MessageView.render(message));
  },

  renderAllMessages: function() {
    var messageArray = App.fetch()
  }

};