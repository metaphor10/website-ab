var React       = require('react'),
    ReactDOM    = require('react-dom'),
    MessageList = React.createFactory(require('./components/helloWorld.jsx')),
    div         = document.getElementById('one');

ReactDOM.render(new MessageList(), div);

