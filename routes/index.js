require('babel-core/register')({
    presets: ['es2015', 'react']
});
var React = require('react'),
    reactDOMServer = require('react-dom/server'),
    express = require('express'),
    router = express.Router(),
    MessageList = React.createFactory(require('../public/javascripts/components/helloWorld.jsx')),
    LikeButton  = React.createFactory(require('../public/javascripts/components/button.jsx')),
    htmlReact = reactDOMServer.renderToString(new MessageList()),
    likeButton = reactDOMServer.renderToString(new LikeButton());

    /* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express', htmlReact: htmlReact, likeButton: likeButton });
});

module.exports = router;

