/**
 * Created by Administrator on 2017/5/12.
 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Store from './store'
import { Header } from './modules/core/components/Header'
import Footer from './modules/core/components/Footer'

ReactDOM.render(
    <div><Header name="steve" age="23"/><Footer name="singleframe" age="58"/></div>,
    document.getElementById("app")
)