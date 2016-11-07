var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Home = require('Home');
var Countdown = require('Countdown');
var Chat = require('Chat');
var Resources = require('Resources');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path ="countdown" component={Countdown}/>
      <IndexRoute path ="home" component={Home}/>
      <Route path ="chat" component={Chat}/>
      <Route path ="resources" component={Resources}/>

    </Route>
  </Router>,
  document.getElementById('app')
);
