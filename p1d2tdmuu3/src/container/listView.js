import React, {Component} from 'react';
import DisplayComponent from '../component/displayComponent';
import {Courses} from '../actions';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';


class ListView extends Component {

    componentDidMount(){
        this.props.dispatch(Courses())
    }


    render(){
        return(
            <React.Fragment>
                <DisplayComponent subject={this.props.courses.topics}></DisplayComponent>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        courses:state.courses
    }
}

ListView.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(ListView);