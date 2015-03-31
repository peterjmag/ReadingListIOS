'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} = React;

var ReadingListScreen = require('./ReadingListScreen');

var ReadingListIOS = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        initialRoute={{
          title: 'Your Reading List',
          component: ReadingListScreen,
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
});

AppRegistry.registerComponent('ReadingListIOS', () => ReadingListIOS);
