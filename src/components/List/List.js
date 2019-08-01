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
        this.props.dispatch({ type: 'FETCH_LIST',  })
    }

    render() {
        return (
            <ul>
                {this.props.reduxState.list.map(item => {
                    return (
                        <li key={item.id}>
                            <p>{item.description}<br /><img src={item.image_url} alt="" /></p>


                        </li>    
                    )
                })}
            </ul>)
                                                                      

}
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(List);

