import React from "react";
import "./index.css";
import { HashRouter, Route } from "react-router-dom";
import Share from "./Share";
import ShoppingList from "./shoppingList";
function App() {
  return(
    <div className="App">
      <HashRouter>
          <Route path="/" exact component={ShoppingList} />
          <Route path="/share" component={Share} />
      </HashRouter>
    </div>
  )
};

export default App;
