'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ListView,
  View,
  Text,
} = React;

var links = require('./staticData');

var ReadingListScreen = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});

    return {
      links: ds.cloneWithRows(links)
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.links}
          renderRow={this.renderRow}
        />
      </View>
    );
  },

  renderRow: function(link) {
    return (
      <View>
        <Text>{link.title}</Text>
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
