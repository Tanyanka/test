import React, {Component, PropTypes} from 'react';
import MyComponent from '../../components/MyComponent';
import RouteComponent from '../../components/RouteComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/testAction';
import RegistrationPage from '../RegistretionPage/index';
import {push} from 'redux-router';


import '../../theme/styles.scss';

export class App extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.push({pathname: '/parent/child/custom'});
    }

    render() {
        return (
            <section>
                <RegistrationPage />
                <MyComponent />
                <RouteComponent handleClick={this.handleClick}/>
                {this.props.children}
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.ReduxTestReducer
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch),
        push: bindActionCreators(push, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

