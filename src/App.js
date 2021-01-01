import React from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Share from "./Share";
import ShoppingList from "./shoppingList";
function App() {
  return(
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/shopping-list" exact component={ShoppingList} />
          <Route path="/shopping-list/share" component={Share} />
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default App;
