var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.renderAllMessages();
    $('#send').submit(Messages.addMessage);
    $('.username').on('click', Friends.toggleStatus);
  },
  
  currentMessages: App.fetch(),

  renderMessage: function(message) {
    MessagesView.$chats.prepend(MessageView.render(message));
  },

  renderAllMessages: function() {
    var messages = MessagesView.currentMessages;
    var messageArray = [];
    messages.forEach(message =>{
      if (message.username === undefined) {
        message.username = 'anonymous';
      }
      if (message.text === undefined) {
        message.text = '';
      }
      messageArray.push(MessageView.render(message));
    });
    MessagesView.$chats.html(messageArray.join('\n'));
    //MessagesView.addNewMessages();
  }
  
  // addNewMessages: function() {
  //   var newMessages = App.fetch(el => !MessagesView.currentMessages.includes(el));
  //   newMessages.forEach(message =>{
  //     MessagesView.renderMessage(message);
  //   });
  //   MessagesView.currentMessages = App.fetch();
  //   setTimeout(function() {
  //     MessagesView.addNewMessages();
  //   }, 500);
  // }

};