var RoomsView = {

  $button: $('#rooms button'), // Selector for the 'Add Room' button on page
  $select: $('#rooms select'), //Selector for the <select> tag that contains all the room options


  initialize: function() {
    var messages = App.fetch(); //set messages to equal an object that holds all message objects in the server
    messages.forEach(message => { //for each message object, 
      var roomName = message.roomname; //set a roomName variable equal to message.roomname
      if (!RoomsView.allRooms.includes(roomName) && roomName !== undefined && roomName !== null) { //if the allRooms array does not already has a given roomname
        RoomsView.renderRoom(roomName); //call Roomsview.renderRoom on the roomname
        RoomsView.allRooms.push(roomName); //add that roomname from the server to the allRooms array.
      }
    });
    $('#rooms button').on('click', Rooms.add);
    RoomsView.$select.on('change', function(event) {
      RoomsView.showRoom(event);
      RoomsView.currentRoom = event.target.value;
    });
  },

  renderRoom: function(room) {
    RoomsView.$select.append(Rooms.render(room)); //find the <select> tag within the rooms ID and append the HTML element representing
    //the room that wasn't already in our allRooms array.
  },
  
  showRoom: function(event) {
    var roomMessages = App.fetch(el => el.roomname === event.target.value || event.target.value === 'All');
      //above line will fetch all the messages whose roomname is equal to the room you click on, or if you click 'All'
      //then it won't filter anything. 
    roomMessages = MessagesView.mapMessages(roomMessages);
    MessagesView.renderMessage(roomMessages.join(''));
  },
  
  currentRoom: 'All',
  
  allRooms: []

};


/*
Notes:
new rooms are only added to the DOM when you reload the page.

*/