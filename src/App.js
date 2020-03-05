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
        <Router basename="/sweets-to-go">
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={SummerHome} />
            <Route path="/menu" component={MenuPage} />
            <Route path="/purchase" component={PurchasePage} />
            <Route path="/login" component={Login} />
            <Route path="/account" component={AccountPage} />
            <Route path="/signup" component={Signup} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
