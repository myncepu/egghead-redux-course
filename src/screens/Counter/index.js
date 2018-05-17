/*
 * index.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */

import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import Counter from './Counter'
import { increment, decrement } from './actions'

class CounterScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Counter
          value={ this.props.counter }
          onIncrement={ this.props.dispatchIncrement }
          onDecrement={ this.props.dispatchDecrement }
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

function mapStateToProps (state) {
  // console.log('state in mapStateToProps', state)
  return {
    counter: state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchIncrement: () => dispatch(increment),
    dispatchDecrement: () => dispatch(decrement),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterScreen)
