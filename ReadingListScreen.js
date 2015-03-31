'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
} = React;

var ReadingListScreen = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>

      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});

module.exports = ReadingListScreen;
