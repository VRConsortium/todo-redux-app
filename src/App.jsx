import "./App.css";
import "semantic-ui-css/semantic.min.css";

import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Header from "./containers/header";
import Productlisting from "./containers/prodcutList";
import ProductDetails from "./containers/productDetails";


function App() {
 return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact  component={Productlisting} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}



export default App;