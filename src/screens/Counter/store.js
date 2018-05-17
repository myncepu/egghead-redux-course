/*
 * store.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import { createStore } from 'redux'
import { reducer } from './reducer'

console.log(reducer)
export const store = createStore(reducer)
