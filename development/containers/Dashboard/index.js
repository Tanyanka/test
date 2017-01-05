import React, {Component} from 'react';
import { Layout, Panel } from 'react-toolbox';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/testAction';

export class Dashboard extends Component {
    render () {
        return (
            <Layout>
                <Panel>
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                        <h1>Dashboard</h1>
                        <h2>Subtitle goes here.</h2>
                    </div>
                </Panel>
            </Layout>
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
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
