/*
 * Counter.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */

import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }
  }

  increment = () => {
    const newCounter = this.state.counter + 1
    this.setState({ counter: newCounter })
  }

  decrement = () => {
    const newCounter = this.state.counter - 1
    this.setState({ counter: newCounter })
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text>{ this.props.value }</Text>
        <Button
          onPress={ this.props.onIncrement }
          title="INCREMENT"
          color="#841584"
        />
        <Button
          onPress={ this.props.onDecrement }
          title="DECREMENT"
          color="#841583"
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
