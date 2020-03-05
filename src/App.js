import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SummerHome } from "./components/Home/SummerHome";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";
import { NoMatch } from "./components/NoMatch";
import { NavigationBar } from "./components/NavigationBar";
import MenuPage from "./components/Menu/MenuPage";
import PurchasePage from "./components/Cart/PurchasePage";
import AccountPage from "./components/Account/AccountPage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/sweets-to-go/" component={SummerHome} />
            <Route path="/sweets-to-go/menu" component={MenuPage} />
            <Route path="/sweets-to-go/purchase" component={PurchasePage} />
            <Route path="/sweets-to-go/login" component={Login} />
            <Route path="/sweets-to-go/account" component={AccountPage} />
            <Route path="/sweets-to-go/signup" component={Signup} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
