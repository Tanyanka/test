import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import Mothership from './containers/Mothership';
import ForEmpire from './containers/ForEmpire';
import ForRebels from './containers/ForRebels';
import DeathStar from './containers/DeathStar';
import CustomComponent from './containers/CustomComponent';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Mothership}/>
        <Route path="forEmpire" component={ForEmpire}/>
        <Route path="forRebels" component={ForRebels}/>
        <Route path="forEmpire/deathStar" component={DeathStar}/>
        <Route path="parent/child/custom" component={CustomComponent}/>
    </Route>
)
