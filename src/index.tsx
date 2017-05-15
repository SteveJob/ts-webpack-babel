/**
 * Created by Administrator on 2017/5/12.
 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Header } from './modules/Header'

let el = document.getElementById('app')
// console.log(el.className)
console.log(el)

ReactDOM.render(
    <Header name="steve" age="23"/>,
    document.getElementById("app")
)