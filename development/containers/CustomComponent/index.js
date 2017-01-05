import React from 'react';
import {Link} from 'react-router';

export default class CustomComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Custom nested component</h1>
                <Link to="/">Back to the Mothership!</Link>
            </div>
        )
    }
}
