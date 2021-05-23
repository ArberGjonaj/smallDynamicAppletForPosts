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

const Main=()=>{
  const [news,setNews]=useState([]);
  console.log(news+"main")
  console.log(localStorage.getItem("theNews"))

  function handleChange(newValue) {
    setNews(newValue);
  } 
 
        return(
        
       <div>
<Router>
    <div>
         
                <NavBar  ref1={"/news"} ref2={"/news/create"}
                 Item1={"News"} Item2={"Create"}/>
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
        </Switch>
        <Footer/>
        </div>
</Router>
</div>   
            
        )
 
}
export default  Main;