import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Home from "./Home/Home"
import UserDashboard from './UserDashboard/UserDashboard';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDetails from './UserDetails/UserDetails';

class Main extends Component {

    render() {
        return (
            <>
                <Header />
                <Switch location={this.props.location}>
                    <Route path="/user" component={UserDashboard} />
                    <Route path="/register" component={UserDetails} />
                    <Route path="/admin" component={AdminDashboard} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </>
        );
    }
}

export default Main;