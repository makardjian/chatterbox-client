var MessagesView = {

  $chats: $('#chats'),
  currentMessages: null,

  initialize: function() {
    MessagesView.renderAllMessages();
    $('#send').submit(Messages.addMessage);
    $('.username').on('click', Friends.toggleStatus);
  },

  renderMessage: function(message) {
    MessagesView.$chats.prepend(message); //add all the new HTML messages to the page. 
  },

  renderAllMessages: function() {
    var messages = App.fetch(); // fetch all the messages in the server and return an object containing all 100 objects
    var messageArray = MessagesView.mapMessages(messages); //returns an array of all the Mesasges stringified into HTML-ready nodes
    MessagesView.currentMessages = messageArray; //sets the currentMessages variable equal to messageArray.
    MessagesView.$chats.html(messageArray.join('\n')); //adds all 100 messages in the messagesArray to the DOM
    MessagesView.addNewMessages(); //call AddNewMessages
  },
  
  addNewMessages: function() {
    var newMessages = MessagesView.mapMessages(App.fetch()); //returns an array of most current messages in the server as HTML-ready nodes
    newMessages = newMessages.filter(el => !MessagesView.currentMessages.includes(el)); //filter the array to equal only the new messages.
    MessagesView.currentMessages = MessagesView.mapMessages(App.fetch()); //re-set currentMessages array to equal the 100 messages in the server.
    
    MessagesView.renderMessage(newMessages.join('/n')); //grab the newMessages array containing the fresh messages and pass it in as a STRING where each HTML element is separated by a new line.
    setTimeout(function() {
      MessagesView.addNewMessages();
    }, 5000);
  },
  
  mapMessages: function(messagesObject) { //mapMessages takes in the messageObject holding 100 messages
    var mappedArray = [];
    messagesObject.forEach(message =>{ //fixes the issue of undefined users and undefined texts
      if (message.username === undefined) {
        message.username = 'anonymous';
      }
      if (message.text === undefined) {
        message.text = '';
      }
      mappedArray.push(MessageView.render(message)); //pushes the HTML-ready strings to our mappedArray
    });
    return mappedArray;
  }

};