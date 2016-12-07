import LikeButton from './button.jsx';

var React = require("react");
    var ReactDOM = require("react-dom");

    var MessageList = React.createClass({
            render:function(){
                return (
                    <div>
                        hello world
                        <LikeButton/>
                            <div className = "first">
                                <div className = "innerone"> one </div>
                                <div className = "innertwo"> two </div> 
                            </div>
                    </div>
                )
            }
        });

    module.exports =  MessageList;

