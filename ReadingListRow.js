'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
} = React;

var ReadingListRow = React.createClass({
  render: function() {
    return (
      <TouchableHighlight underlayColor={'rgba(0, 0, 0, 0.1)'}>
        <View style={styles.container}>
          <Image
            source={{uri: this.props.link.image}}
            style={styles.linkImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.linkTitle} numberOfLines={2}>{this.props.link.title}</Text>
            <Text style={styles.linkHost}>{this.props.link.host}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  linkImage: {
    backgroundColor: '#dddddd',
    width: 60,
    height: 60,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  linkTitle: {
    fontWeight: 'bold',
  },
  linkHost: {
    color: '#999999',
  },
});

module.exports = ReadingListRow;
