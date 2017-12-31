import React, { Component } from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED } from '../utils/events.js';

const socketURL = "http://localhost:8080";

class HomePage extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            socket: null,
            user: null
        };
    }

    componentWillMount() {
        this.initSocket();
    }

    initSocket = () => {
        const socket = io(socketURL);
        socket.on('connect', () => {
            console.log("CONNECTED");
        })
        this.setState({ socket });
    }

    setUser = (user) => {
        const { socket } = this.state;
        socket.emit(USER_CONNECTED, user);
        this.setState({ user });
    }

    logout = () => {
        const { socket } = this.state
        socket.emit(LOGOUT);
        this.setState({ user: null });
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <h2>Testing</h2>
            </div>
        );
    }
}

export default HomePage;
