import React, {Component} from "react";

class ResponseCard extends Component {
    render() {
        return (<div className="response card">{this.props.response}</div>);
    }
}

export default ResponseCard;