import React from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Share from "./Share";
import ShoppingList from "./shoppingList";
function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ShoppingList} />
          <Route path="/share" component={Share} />
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default App;
