var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="roomname"><%- roomname %></div>
        <div class="username <%- username %>"><%- username %></div>
        <div><%- text %></div>
      </div>
    `)
};