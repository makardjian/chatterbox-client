var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    //adds a 'submit' event listener to the form tag in the HTML document.
    //when the firm is submitted, Formview.handleSubmit() is invoked.
    //the handleSubmit method just prevents the default action for 'submit'
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};