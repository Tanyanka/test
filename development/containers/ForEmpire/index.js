import React from 'react';
import {Link} from 'react-router';


export default class ForEmpire extends React.Component {
    render () {
        return (
            <div>
                <h1>Route one!</h1>
                <p>Become the part of the Empire!!</p>
                <p>λ</p>
                <Link to="/forEmpire/deathStar">Build Death Star?</Link>
                <p>λ</p>
                <Link to="/">Back to the Mothership!</Link>
            </div>
        )
    }
}
