import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

class List extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_LIST' })
    }

    render() {
        return (
            <ul>
                {this.props.storeInstance.item.map(item => {
                    return (
                        <li key={item.id}>
                            <p>{item.description}<br />{item.image_url}</p>


                        </li>    
                    )
                })}
            </ul>)
                                                                      

}
}
export default connect()(List);

