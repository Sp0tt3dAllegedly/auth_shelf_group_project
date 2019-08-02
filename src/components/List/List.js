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
            <>
            <form>
                
            </form>

                {this.props.reduxState.list.map(item => {
                    return (
                        <ul key={item.id}>
                        <li>{item.description}<br /><img src={item.image_url} alt="" />

                        </li> 
                        </ul>   
                    )
                })}
            
            </>
            );
                                                                      

}
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(List);

