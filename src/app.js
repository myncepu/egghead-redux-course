/*
 * app.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React from 'react'
import { Provider } from 'react-redux'

import Counter from './screens/Counter'
import { store } from './screens/Counter/store'

class App extends React.Component {
  render() {
    return (
      // <Provider store={ store }>
        <Counter />
      // </Provider>
    )
  }
}

export default App
