import React from 'react'
import { Provider } from 'react-redux'

import CounterScreen from './src/screens/Counter'
import { store } from './src/screens/Counter/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <CounterScreen />
      </Provider>
    )
  }
}
