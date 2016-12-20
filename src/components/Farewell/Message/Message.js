import React, { Component, PropTypes } from 'react';
import { sample } from 'lodash';

import { Image, Text, View } from 'react-native';

const fonts = [
  'indie-flower',
  'gloria-hallelujah',
  'reenie-beanie',
  'gochi-hand',
  'crafty-girls'
]

export default class Message extends Component {
  static propTypes = {
    farewell: PropTypes.object.isRequired
  }

  render() {
    const {salutation, message, author} = this.props.farewell;
    const {subject} = this.props;

    return (
      <View style={'container message ' + sample(fonts)}>
        <View style='message__content'>
          <Text>{salutation} {subject},</Text>
          <Text>{message.start} {message.middle}</Text>
          <Text>{message.end}</Text>
        </View>
        <View style='author'>
          <View style='author__photo'>
            <Image style={{width: 150, height: 150, borderRadius: 75}} source={author.portrait} />
          </View>
          <View style='author__label'>
            <Text style='author__name'>{author.name}</Text>
            <Text style='author__role'>{author.role}</Text>
          </View>
        </View>
      </View>
    );
  }
}
