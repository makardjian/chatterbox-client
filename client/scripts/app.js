var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() { //App.initialize() runs everytime the page reloads b/c the script is nestled in the HTML
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner); //  

  },

  fetch: function(callback = (el => true)) {
    var dataCollection = [];
    Parse.readAll((data) => {
      // examine the response from the server request:
      dataCollection = data.results.filter(message => callback(message));
    });
    return dataCollection;
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true); //what does this do?
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
