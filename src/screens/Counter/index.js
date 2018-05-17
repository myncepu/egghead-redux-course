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
import { store } from './store'

class CounterScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }
  }

  render() {
    // const store = createStore(reducer)
    // console.log(store)

    return (
      <View style={styles.container}>
        <Counter
          value={ store.getState() }
          onIncrement={() => {
            store.dispatch({
              type: 'INCREMENT',
            })
          }}
          onDecrement={() => {
            store.dispatch({
              type: 'DECREMENT',
            })
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

function mapStateToProps (state) {
  // console.log('state in mapStateToProps', state)
  return {
    counter: state
  }
}

// function mapDispatchToProps (dispatch) {
//   console.log('dispatch', dispatch)
//   return {
//     // dispatchAddPerson: (person) => dispatch(addPerson(person)),
//     // dispatchdeletePerson: (person) => dispatch(deletePerson(person))
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(CounterScreen)
