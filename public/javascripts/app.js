var React       = require("react");
    var ReactDOM    = require("react-dom");
    var MessageList = React.createFactory(require("./components/helloWorld.jsx"));
    var LikeButton  = React.createFactory(require("./components/button.jsx"));
    var div         = document.getElementById("one");
    var button      = document.getElementById("example");

    console.log(div);
    console.log(MessageList);
    ReactDOM.render(new MessageList(), div);
    ReactDOM.render(new LikeButton(), button);
    
