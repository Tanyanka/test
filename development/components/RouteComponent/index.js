import React from 'react';
import {Link} from 'react-router';
import Linka from 'react-toolbox/lib/link';
import Linko from 'react-toolbox-plus-router/lib/link'; // Link component complaint with Router and Toolbox!

export default class RouteComponent extends React.Component {
    render() {
        // Display is only used for rendering, its not a property of <Link>
        // query field - example of making call to a server
        const links = [
            {pathname: '/', display: '•/'},
            {pathname: '/forEmpire', display: '•/for Empire'},
            {pathname: '/forRebels', display: '•/for Rebels'},
            {pathname: '/forEmpire', query: {foo: 'bar'}, display: '•/for Empire (with query, see omnibox)'},
            {pathname: '/forRebels', query: {baz: 'boo'}, display: '•/for Rebels (with query, see omnibox)'},
            {pathname: '/forEmpire/deathStar', display: '•/forEmpire/deathStar (nested path example)'},
        ].map((l, i) =>
            <p key={i}>
                <Link to={l}>{l.display}</Link>
            </p>
        );

        return (
            <div>
                {this.props.children}

                <div>
                    <h1>App Container</h1>
                    <Linka style={{display: 'block'}} href="/forEmpire">For Empire! (basic toolbox link - simple 'a' tag - causes full page refresh on click)</Linka>
                    <Linko style={{display: 'block'}} href="/forEmpire">For Empire! (this component should be used)</Linko>
                    {links}

                    <a href="#" onClick={this.props.handleClick}>
                        •/parent/child/custom
                    </a>

                    {this.props.children}
                </div>
            </div>
        )
    }
}


