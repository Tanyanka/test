import React, {Component} from 'react';
import { Button } from 'react-toolbox/lib/button';

export default class MyComponent extends Component {
    render() {
        return (
            <section>
                <h1>Hello SevenX</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci animi, aut autem commodi cupiditate distinctio earum eveniet expedita facere in magnam obcaecati quaerat quo totam unde ut vero voluptatem?</p>
                <Button icon='bookmark' label='Bookmark' raised primary/>
            </section>
        );
    }
};


