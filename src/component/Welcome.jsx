import React, {Component} from "react";
import NewUserCard from './NewUserCard';
import ReactCardFlip from 'react-card-flip';
import ResponseCard from "./ResponseCard";
import RoomState from "./RoomState";
import Grid from '@material-ui/core/Grid';

function FrontCard(props) {
    if (!props.state.isLoggedIn) {
        return <ResponseCard response="Welcome Human"></ResponseCard>
    } else {
        return <RoomState state={props.state}/>
    }
}

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFlipped: false,
            isLoggedIn: false,
            name: "",
            room: "",
            leader: false,
            points: 0,
            members: []
        };

        this.processFlip = this.processFlip.bind(this);
        this.updateRoomState = this.updateRoomState.bind(this);
        this.fillUsersPool = this.fillUsersPool.bind(this);
    }

    processFlip(event) {
        if (!this.state.isLoggedIn) {
            this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        }
    }

    fillUsersPool = (users) => this.setState({members: users});

    updateRoomState(username, room, host, points) {
        this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
        this.setState({ name: username });
        this.setState({ room: room });
        this.setState({ host: host });
        this.setState({ points: points });
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <div onClick={this.processFlip}>
                    <FrontCard state={this.state} />
                </div>
                <Grid container>
                    <NewUserCard onClickCapture={this.processFlip} updateRoomState={this.updateRoomState} fillUsersPool={this.fillUsersPool} />
                </Grid>
            </ReactCardFlip>
        );
    }
}

export default Welcome;