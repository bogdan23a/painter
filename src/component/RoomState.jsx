import React, {Component} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const UserRowWithType = (props) => {
    if (props.host) {
        return <TableCell component="td" scope="row" className="host">{props.name}</TableCell>
    } else {
        return <TableCell component="td" scope="row">{props.name}</TableCell>
    }
}

class RoomState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room: "",
            name: "",
            host: false,
            points: 0,
            members: []
        }
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        this.setState(nextProps.state);
        console.log(this.state);
    }

    render() {
        return (
            <div className="response card">
                Room {this.state.room}
                <TableContainer >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                            <TableCell>User</TableCell>
                            <TableCell align="right">Points</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow key={this.state.name}>
                                <UserRowWithType host={this.state.host} name={this.state.name}/>
                                <TableCell align="right">{this.state.points}</TableCell>
                            </TableRow>
                            {
                                this.state.members.forEach(member => {
                                    if (member.name !== this.state.name) {
                                        <TableRow key={member.name}>
                                            <UserRowWithType leader={member.host} name={member.name}/>
                                            <TableCell align="right">{member.points}</TableCell>
                                        </TableRow>
                                    }
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default RoomState;