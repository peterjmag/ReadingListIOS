'use strict';

var React = require('react-native');
var {
  WebView,
} = React;

var ViewLinkScreen = React.createClass({
  render: function() {
    return (
      <WebView
        url={this.props.link.url}
      />
    );
  },
});

module.exports = ViewLinkScreen;
