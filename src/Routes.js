import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from "./pages/ProductsPage";

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/productos' component={ProductsPage} />
        </Switch>
    );
}

export default Routes