/**
 * Created by Administrator on 2017/5/15.
 */
import * as React from 'react'
import '../style/header.less'

export interface HelloProps {
    name: string;
    age: string;
}
export class Header extends React.Component<HelloProps, undefined> {
    constructor(props) {
        super(props)
        console.log('ts running...')
    }
    render() {
        return (
            <div className="header">header, {this.props.age}, {this.props.name}</div>
        )
    }
}