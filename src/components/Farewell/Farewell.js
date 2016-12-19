import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { Text, TouchableHighlight, View } from 'react-native';

import * as farewellActions from '../../actions/farewell';

import Message from './Message/Message';

const styles = {
  farewell: {
    flexDirection: 'column',
    flex: 1
  },
  message: {
    flex: 1
  },
  footer: {
    flex: 1,
    padding: 20,
    fontSize: 4
  }
};

 class Farewell extends Component {
   static propTypes: {
     actions: PropTypes.object.isRequired,
     farewell: PropTypes.array.isRequired,
     subject: PropTypes.string.isRequired
   };

   render() {
     return (
        <View style={styles.farewell}>
          <View style={styles.message}>
            <Message subject={this.props.subject} farewell={this.props.farewell} />
          </View>
          <View style={styles.footer}>
            <TouchableHighlight onPress={this.props.actions.generateFarewell}>
              <Text>Another!</Text>
            </TouchableHighlight>
          </View>
        </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    farewell: state.farewell
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(farewellActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Farewell);
