/*
 * Counter.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */

import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import {
  Text,
  Button,
} from 'react-native-elements'

export default class Counter extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <View style={styles.container}>
        <Text
          h1
          style={{
            marginBottom: 20,
          }}
        >{ this.props.value }</Text>
        <Button
          onPress={ this.props.onIncrement }
          title='INCREMENT'
          color='white'
          buttonStyle={{
            backgroundColor: 'rgba(92, 99,216, 1)',
            width: 300,
            height: 45,
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 20,
          }}
        />
        <Button
          onPress={ this.props.onDecrement }
          title='DECREMENT'
          color='#841583'
          buttonStyle={{
            backgroundColor: 'rgba(92, 99,216, 1)',
            width: 300,
            height: 45,
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 5
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
