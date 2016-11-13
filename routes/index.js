require("babel-core/register")({
    presets: ["es2015", "react"]
    });
    var React = require("react");
    var reactDOMServer = require("react-dom/server");

    var express = require("express");
    var router = express.Router();

    var MessageList = React.createFactory(require("../public/javascripts/components/helloWorld.jsx"));
    var LikeButton  = React.createFactory(require("../public/javascripts/components/button.jsx"));

    var htmlReact = reactDOMServer.renderToString(new MessageList());
    var likeButton = reactDOMServer.renderToString(new LikeButton());

    /* GET home page. */
    router.get("/", function(req, res, next) {
    res.render("index", { title: "Express", htmlReact: htmlReact, likeButton: likeButton });
    });

    module.exports = router;
    
