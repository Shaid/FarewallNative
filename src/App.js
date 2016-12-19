import React, { Component } from 'react';
import { View } from 'react-native';
import Farewell from './components/Farewell/Farewell'

const config = require('../config/config.json');

class App extends Component {
  render() {
    return (
      <View style={{
        textAlign: 'center',
        padding: 5,
        flex: 1
      }}>
        <Farewell subject={config.subject} />
      </View>
    );
  }
}

export default App;
