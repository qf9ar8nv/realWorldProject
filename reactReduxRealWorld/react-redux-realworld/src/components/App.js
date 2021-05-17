import React from 'react';
import {connect, connet} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {push} from 'react-router-redux';

class App extends React.Component {
    render() {
        console.log(this.props.appLoaded);
        if(this.props.appLoaded){
            return (
                <div>
                    ㅇㅇㅇㅇ
                </div>
            );
        }
        return(
            <div>
                1111
            </div>
        );
    }
}

export default connect()(App);