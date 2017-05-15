import * as React from 'react'

export interface FooterProp {
    name: string,
    age: string
}

export default class extends React.Component<FooterProp, undefined> {
    render() {
        return (
            <div className="footer">{this.props.name}, {this.props.age}</div>
        )
    }
}