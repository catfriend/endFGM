var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">#endFGM</li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Home</IndexLink>
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
            <Link to="/chat" activeClassName="active-link">Chat</Link>
            <Link to="/resources" activeClassName="active-link">Resources</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="http://www.catfriend.net" target="_blank">Elizabeth A. Kari</a> and <a href="https://www.github.com/MarYaam" target="_blank">Mariam Camara</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Nav;
