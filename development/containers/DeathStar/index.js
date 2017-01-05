import React from 'react';
import {Link} from 'react-router';


export default class DeathStar extends React.Component {
    render () {
        return (
            <div>
                <h1>Congratulations, you have built a Death Star!</h1>
                <Link to="/forEmpire">Back to Empire!</Link>
                <p>λ</p>
                <Link to="/">Back to the Mothership!</Link>
            </div>
        )
    }
}
