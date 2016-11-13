var React = require("react");
    var ReactDOM = require("react-dom");


    var LikeButton = React.createClass({
    getInitialState: function() {
    return {liked: false};
    },
    handleClick: function(event) {
    this.setState({liked: !this.state.liked});
    },
    render: function() {
    var text = this.state.liked ? "like" : "havent liked";
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
    }
    });
    module.exports =  LikeButton;
