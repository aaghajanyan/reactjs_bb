import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory as history} from "history";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/footer/Footer"
import { Workouts } from "./components/workouts/Workouts";
import { Nutrition } from "./components/nutrition/Nutrition";
import { Blog } from "./components/blog/Blog";
import { PricesAndPlans } from "./components/pricesAndPlans/PricesAndPlans";
import { Help } from "./components/help/Help";
import { Community } from "./components/community/Community";
import { Shop } from "./components/shop/Shop";
import { JoinNow } from "./components/joinNow/JoinNow";
import { LogIn } from "./components/logIn/LogIn";
import { navBarItems } from "./resources/navbarConstants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

class App extends React.Component {
    render () {
        return (
            <BrowserRouter history={history}>
                <NavBar navBarItems={navBarItems}/>
                <Switch>
                    <Route exact path="/" component={Workouts} />
                    <Route path="/programs" component={Workouts} />
                    <Route path="/nutrition" component={Nutrition} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/plans" component={PricesAndPlans} />
                    <Route path="/help" component={Help} />
                    <Route path="/community" component={Community} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/joinNow" component={JoinNow} />
                    <Route path="/logIn" component={LogIn} />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    }
}

export { App };