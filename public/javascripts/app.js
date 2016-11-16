var React       = require('react'),
    ReactDOM    = require('react-dom'),
    MessageList = React.createFactory(require('./components/helloWorld.jsx')),
    LikeButton  = React.createFactory(require('./components/button.jsx')),
    div         = document.getElementById('one'),
    button      = document.getElementById('example');

ReactDOM.render(new MessageList(), div);
ReactDOM.render(new LikeButton(), button);

