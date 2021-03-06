import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import List from './List/List';
import Detail from './Detail/Detail';
import NotFound from './NotFound/NotFound';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/detail/:id" component={Detail} />
                <Route exact path="/" component={List} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
