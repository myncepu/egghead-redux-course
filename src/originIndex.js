/*
 * index.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React from 'react'
import {
  View
} from 'react-native'
import {
  TabNavigator,
  addNavigationHelpers,
} from 'react-navigation'
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'
import { Provider, connect } from 'react-redux'

// import myApp from './app'
// import Counter from './screens/Counter'
// import { store } from './screens/Counter/store'

const AppRouteConfigs = {
  Home: { screen: View },
  // Settings: View,
}
const AppNavigator = TabNavigator(AppRouteConfigs)

console.log('AppNavigator', AppNavigator.router.getActionForPathAndParams.toString())
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'))
const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}

const appReducer = combineReducers({
  nav: navReducer,
})

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
)
const addListener = createReduxBoundAddListener('root')

class App extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      })} />
    )
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
})

const AppWithNavigationState = connect(mapStateToProps)(App)

const store = createStore(
  appReducer,
  applyMiddleware(middleware),
)
class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default Root
