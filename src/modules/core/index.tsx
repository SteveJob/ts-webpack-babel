/**
 * Created by Administrator on 2017/5/12.
 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Header } from './components/Header'
import Footer from './components/Footer'
ReactDOM.render(
    <div><Header name="steve" age="23"/><Footer name="singleframe" age="58"/></div>,
    document.getElementById("app")
)