import React from "react";
import NewsComponent from "../Components/NewsComponent";

class News extends React.Component{
  
state={
    newsList:[]
}
render(){
    const news = Object.keys(this.state.newsList).map((key) => {

        return(

        <NewsComponent   titletext={this.state.newsList[key].title} bodytext={this.state.newsList[key].post} postId={this.state.newsList[key].id } authorOfPost={this.state.newsList[key].author}  dateOfPost={this.state.newsList[key].date}/>
          )

    })
    return(
        <React.Fragment>
            <div>
             <h3 className="d-flex justify-content-center">
                 News Site
                 </h3>
                 <h4 className="d-flex justify-content-center mt-5">
                     Your news
                     </h4>
                    <div className="px-3"> <hr style={{ borderTop:" 1px solid black", width:"50%"}}/>
                    </div>
               <div>{news}</div> 
            </div>
        </React.Fragment>
    )
}
}


export default News;