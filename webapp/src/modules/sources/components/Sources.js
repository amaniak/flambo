import React             from 'react'
import { Route, Switch } from 'react-router-dom'

import Index             from '../containers/SourcesIndexContainer'
import View              from '../containers/SourceContainer'
import Create            from '../containers/CreateSourceContainer'


export default ({ match }) => (
    <div style={{ height: '100%', width: '100%' }}>
        <Route path={match.url} component={Index} exact/>
        <Switch>
            <Route path={`${match.url}/create`} component={Create}/>
            <Route path={`${match.url}/:id`}    component={View}/>
        </Switch>
    </div>
)
