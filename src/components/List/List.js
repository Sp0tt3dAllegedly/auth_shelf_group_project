import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

class List extends Component {
    state = {
        newItem: {
            id: '',
            description: '',
            image_url: '',
        }
    }

    handleChange = (propertyName, event) => {
        console.log('event happended')
        this.setState({
            newItem: {
                ...this.state.newItem,
                [propertyName]: event.target.value,
            }
        });
    }

    addNewItem = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_LIST', payload: this.state.newItem })
        this.setState({
            newItem: {
                id: this.state.newItem.id + 1,
                description: '',
                image_url: '',
            }
        });
    }
    
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_LIST',  })
    }

    render() {

        // update inputs below to reflect correct information
        return (
            <>
            
                <form onSubmit={this.addNewItem}>
                    <input type='text' placeholder='Description' value={this.state.newItem.description}
                        onChange={(event) => this.handleChange('description', event)} />

                    <input type='text' placeholder='Image URL' value={this.state.newItem.image_url}
                        onChange={(event) => this.handleChange('image_url', event)} /> 
                </form>
            

                {this.props.reduxState.list.map(item => {
                    return (
                        <ul key={item.id}>
                        <li >
                            {item.description}<br />
                            <img src={item.image_url} alt="" />


                        </li> 
                         </ul> 
                          
         )
     })
      
          }
          </>
          )
                         
           
           
           
                                                                     
          
          }
          }
          
const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(List);

