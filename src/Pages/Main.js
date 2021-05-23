import React,{useState} from "react";
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
import MyNews from "./MyNews";

import Login from "../Pages/Login";
import SingUp from "../Pages/SingUp";
const Main=()=>{
  const [news,setNews]=useState([]);

  function handleChange(newValue) {
    setNews(newValue);
  } 
 
        return(
        
       <div>
<Router>
    <div>
         
<Switch>
          <Route exact path="/news/create">
            <Create setNews={handleChange}/>
          </Route>
          <Route exact path="/news">
            <News news={news} />
          </Route>
          <Route exact path="/news/mynews">
						<MyNews />
					</Route>
          <Route exact path="/news/:id">
            <NewsPage  />
            <Route exact path={"/404"} component={Error404}/>
       
             
          </Route>
          <Route exact path="/news">
            <News news={news} />
          </Route>
          <Route exact path="/" component={Login}/>
          <Route exact path="/singup" component={SingUp}/>
        </Switch>
        <Footer/>
        </div>
</Router>
</div>   
            
        )
 
}
export default  Main;