import React, {Component} from "react";

class PromptCard extends Component {
    render() {
        return (<div className="prompt card">{this.props.prompt}</div>);
    }
}

export default PromptCard;