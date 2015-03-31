'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ListView,
  View,
} = React;

var fetch = require('fetch');
var ReadingListRow = require('./ReadingListRow');
var ViewLinkScreen = require('./ViewLinkScreen');

var ReadingListScreen = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1.id !== r2.id,
      }),
    };
  },

  componentDidMount: function() {
    // For the moment, this requires the API server from
    // https://github.com/peterjmag/reading-list to be running.
    // You might also want to populate the web app with some data.
    fetch('http://localhost:3001/links/')
      .then((response) => response.json())
      .catch((error) => {
        this.setState({
          dataSource: this.getDataSource([]),
        });
      })
      .then((links) => {
        this.setState({
          dataSource: this.getDataSource(links),
        });
      });
  },

  getDataSource: function(links) {
    return this.state.dataSource.cloneWithRows(links);
  },

  selectLink: function(link) {
    this.props.navigator.push({
      title: link.title,
      component: ViewLinkScreen,
      passProps: {link},
    });
  },

  renderRow: function(link) {
    return (
      <ReadingListRow
        key={link.id}
        onSelect={() => this.selectLink(link)}
        link={link}
      />
    );
  },

  render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
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
