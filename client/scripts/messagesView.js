var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('.username').on('click', Friends.toggleStatus);
    $('#send .submit').on('click', Messages.addMessage);
  },

  renderMessage: function(message) {
    $('#chats').prepend(MessageView.render(message));
  }

};