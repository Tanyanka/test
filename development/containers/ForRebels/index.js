import React from 'react';
import {Link} from 'react-router';

export default class ForRebels extends React.Component {
    render () {
        return (
            <div>
                <h1>Route two!</h1>
                <p>Become the part of the Rebels!!!</p>
                <Link to="/">Back to the Mothership!</Link>
            </div>
        )
    }
}
