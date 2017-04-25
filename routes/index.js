require('babel-core/register')({
    presets: ['es2015', 'react']
});
var React = require('react'),
    reactDOMServer = require('react-dom/server'),
    express = require('express'),
    router = express.Router(),
    MessageList = React.createFactory(require('../public/javascripts/components/helloWorld.jsx')),
    htmlReact = reactDOMServer.renderToString(new MessageList());

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {title: 'Hello World, AU ACM', htmlReact: htmlReact});
});

module.exports = router;
