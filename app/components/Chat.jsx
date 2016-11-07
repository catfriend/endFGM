var React = require('react');
var io = require('socket.io-client')

var Chat = React.createClass({
  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
  },
  connect() {
    alert("Connected: " + this.socket.id);
  },

  render: function (){
    return (
      <div>
        <h3>This is a safe space for women to ask questions about FGM, their bodies, their health, themselves.</h3>
        <p>There are plans for a form here for peer to peer chat with socket.io. But, you know, the time constraints of a hackathon.</p>
        <a target="_blank" href="https://stormy-basin-27360.herokuapp.com/chat">Chat</a>

      </div>
    )
  }
});


module.exports = Chat;
