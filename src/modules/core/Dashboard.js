/**
 * Created by Administrator on 2017/5/19.
 */
import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export default class Page extends Component {

    render() {
        return (
            <div>
                <Header age="23" name="steve"/>
                dashboard page
                <Footer age="24" name="steve"/>
            </div>
        )
    }
}