import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Create from "./Create";
import News from "./News";
import NewsPage from "./NewsPage";
import NavBar from "../Components/NavBar";
import Error404 from "./Error404";
import Footer from "../Components/Footer";
export default class Main extends React.Component{
    render(){
        return(
       <div>
<Router>
    <div>
         
                <NavBar  ref1={"/news"} ref2={"/news/create"}
                 Item1={"News"} Item2={"Create"}/>
<Switch>
          <Route exact path="/news/create">
            <Create />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/news/:id">
            <NewsPage />
            <Route exact path={"/404"} component={Error404}/>

             <Redirect to={"/404"}/>
          </Route>
        </Switch>
        <Footer/>
        </div>
</Router>
</div>   
            
        )
    }
}