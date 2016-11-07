var React = require('react');

var Resources = React.createClass({
  render: function (){
    return (
      <div>
        <h1>Resources for Survivors</h1>
        <a target="_blank" href="http://www.safehandsforgirls.org/">Safe Hands for Girls</a>
        <p>An FGM survivor led nonprofit aiming to end FGM and all forms of gender based violence.</p>
        <a target="_blank" href="http://www.who.int/mediacentre/factsheets/fs241/en/">WHO</a>
        <p>WHO Fact sheet on genital mutilation worldwide.</p>
        <a target="_blank" href="http://www.dofeve.org/">Daughters of Eve</a>
        <p>Daughters of Eve is a UK based nonprofit that works to advance and protect the physical, mental, sexual and reproductive health rights of  young people from female genital mutilation practising communities.</p>
        <a target="_blank" href="https://www.theguardian.com/society/2016/feb/05/research-finds-200m-victims-female-genital-mutilation-alive-today">The Guardian</a>
        <p>An article in The Guardian with current statistics on FGM survivors.</p>
      </div>
    )
  }
});

module.exports = Resources;
