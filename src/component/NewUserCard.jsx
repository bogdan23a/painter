import React, {Component} from "react";
import {withForm} from './UserForm';
import Grid from '@material-ui/core/Grid';
import {Controller} from 'react-hook-form';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle'
import MeetingRoom from '@material-ui/icons/MeetingRoom'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class NewUserCard extends Component {
    constructor(props) {
        super(props);
        this.eventSource = null;
        this.login = this.login.bind(this);
        this.onHost = this.onHost.bind(this);
        this.onJoin = this.onJoin.bind(this);
    }
    
    login(url = '') {
        return fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.eventSource =  new EventSource("http://localhost:1000/events/" + data['room']);
            this.eventSource.onmessage = (response) => this.props.fillUsersPool(JSON.parse(response.data).users)
            this.props.updateRoomState(data['name'], data['room'], data['host'], data['points']);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    onHost(data) {
        this.login("http://localhost:1000/users/host/" + data.username);
    }

    onJoin(data) {
        this.login("http://localhost:1000/users/member/" + data.username + "/" + data.room);
    }

    async getBackEndUri() {
        const service = await this.consul.getEngineUri();
        return service;
    }

    render() {
        const {control, register, handleSubmit, errors} = this.props;
        return (
            <Grid container className="response card" display="column">
                <Grid item display="block">
                    Get over here
                </Grid>

                <Grid item className="mt-2">
                    <form>
                        <Grid container direction="column">
                                <Grid item>
                                    <Controller name="username" control={control} defaultValue="" rules={{required: true}}
                                    render={({onChange, value}) => 
                                        <div>
                                            <InputLabel className="response" htmlFor="username">username</InputLabel>
                                            <Input id="username" name="username" type="text" inputRef={register} 
                                                startAdornment={<InputAdornment className="response" position="start"><AccountCircle /></InputAdornment>}/>
                                            {errors.username && <p className="error">Please enter an username</p>}
                                        </div>}/>
                                    
                                </Grid>
                                <Grid item>
                                <Controller name="room" control={control} defaultValue=""
                                    render={({onChange, value}) => 
                                        <div>
                                            <InputLabel className="response" htmlFor="room">room</InputLabel>
                                            <Input id="room" name="room" type="text" inputRef={register} 
                                                startAdornment={<InputAdornment className="response" position="start"><MeetingRoom /></InputAdornment>}/>
                                        </div>}/>
                                </Grid>
                        </Grid>

                                <ButtonGroup orientation="horizontal" color="primary" variant="contained" fullWidth={true} className="mt-3" aria-label="vertical contained primary button group">
                                    <Button color="primary" variant="contained" onClick={handleSubmit(this.onHost)}>Host</Button>
                                    <Button color="primary" variant="contained" onClick={handleSubmit(this.onJoin)}>Join</Button>
                                </ButtonGroup>
                    </form>
                </Grid>
            </Grid>
        );
    }
}

export default withForm(NewUserCard);