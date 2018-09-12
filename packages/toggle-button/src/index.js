
import React from "react"

export  default class ToggleButton extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isOn : true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isOn?this.props.textOn:this.props.textOff}
            </button>
        );
    }
    handleClick(){
        this.setState({isOn: !this.state.isOn});
    }
}