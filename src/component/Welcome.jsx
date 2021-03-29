import React, {Component} from "react";
import NewUserCard from './NewUserCard';
import ReactCardFlip from 'react-card-flip';
import ResponseCard from "./ResponseCard";

class Welcome extends Component {
    constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.processFlip = this.processFlip.bind(this);
      }
    
    processFlip(event) {
        event.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <div onClick={this.processFlip}>
                    <ResponseCard response="Welcome Human"></ResponseCard>
                </div>
                <NewUserCard/>
            </ReactCardFlip>
        );
    }
}

export default Welcome;