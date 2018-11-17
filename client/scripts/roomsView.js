var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
    var messages = App.fetch();
    messages.forEach(message => {
      var roomName = message.roomname;
      if (!RoomsView.allRooms.includes(roomName)) {
        RoomsView.renderRoom(roomName);
        RoomsView.allRooms.push(roomName);
      }
    });
    $('#rooms button').on('click', Rooms.add);
    
  },

  renderRoom: function(room) {
    RoomsView.$select.append(Rooms.render(room));
  },
  
  allRooms: []

};