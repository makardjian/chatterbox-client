var Rooms = {

  render: function(room) {
    return `<option value ="${room}">${room}</option>`;
  },
  
  roomNum: 1,
  
  add: function() {
    $('#rooms select').append(Rooms.render(Rooms.roomNum));
    Rooms.roomNum++;
  }

};