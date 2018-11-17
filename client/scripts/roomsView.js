var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
    $('#rooms button').on('click', Rooms.add);
  },

  renderRoom: function(room) {
    RoomsView.$select.append(Rooms.render(room));
  }

};
