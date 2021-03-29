import React, {Component} from "react";
import { useForm, Controller } from 'react-hook-form';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle'
import MeetingRoom from '@material-ui/icons/MeetingRoom'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

function Shit() {
    const {control, register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch("localhost:1000/users/" + data.username)
        .then((res) => res.json());
    }
    return {control, register, handleSubmit, errors, onSubmit};
}

class NewUserCard extends Component {
    constructor(props) {
        super(props);
        this.control = Shit().control;
        this.register = Shit().register;
        this.handleSubmit = Shit().handleSubmit;
        this.errors = Shit().errors;
        this.onSubmit = Shit().onSubmit;
    }
    
    render() {
        return (
            <Grid container className="response card" display="column">
                <Grid item display="block">
                    Get over here
                </Grid>

                <form onSubmit={this.handleSubmit(this.onSubmit)}>
                    <Grid item className="mt-5 mb-5 ml-5">
                        <Grid container direction="column">
                                <Grid item>
                                    <Controller name="username" control={this.control} defaultValue="" rules={{required: true}}
                                    render={({onChange, value}) => 
                                        <div>
                                            <InputLabel className="response" htmlFor="username">username</InputLabel>
                                            <Input id="username" name="username" type="text" inputRef={this.register} startAdornment={<InputAdornment className="response" position="start"><AccountCircle /></InputAdornment>}/>
                                            {this.errors.username && <p className="error">Please enter an username</p>}
                                        </div>}/>
                                    
                                </Grid>
                                <Grid item>
                                <Controller name="room" control={this.control} defaultValue=""
                                    render={({onChange, value}) => 
                                        <div>
                                            <InputLabel className="response" htmlFor="room">room</InputLabel>
                                            <Input id="room" name="room" type="text" ref={this.register} startAdornment={<InputAdornment className="response" position="start"><MeetingRoom /></InputAdornment>}/>
                                        </div>}/>
                                </Grid>
                        </Grid>
                    </Grid>
                    <Grid className="mt-5" container display="column" justify="center" alignItems="stretch">
                            {/* <ButtonGroup orientation="vertical" color="primary" variant="contained" aria-label="vertical contained primary button group"> */}
                            <Grid item>
                                <Button color="primary" variant="contained" type="submit">Host</Button>
                            </Grid>
                            <Grid item>
                                <Button color="primary" variant="contained" onClick={this.processJoin}>Join</Button>
                            </Grid>
                            {/* </ButtonGroup> */}
                    </Grid>
                </form>
            </Grid>);
    }
}

export default NewUserCard;