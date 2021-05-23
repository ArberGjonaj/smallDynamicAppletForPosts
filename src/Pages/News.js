import React from "react";
import NewsComponent from "../Components/NewsComponent";
import {connect} from "react-redux"

class News extends React.Component{

    renderLists(){
      
        return this.props.newsArray.map(
            (newsArray,index)=>{
                return  <NewsComponent   header={newsArray.headline} bodytext={newsArray.description} authorOfPost={newsArray.author}  dateOfPost={newsArray.date} idOfPost={index} />
            }
        )
    }
    
    render(){

        return(
            <React.Fragment>
                <div>
                    <h3 className="d-flex justify-content-center">News Site</h3>
                    <h4 className="d-flex justify-content-center mt-5">Your news</h4>
                    
                    <div className="px-3"> <hr style={{ borderTop:" 1px solid black", width:"50%"}}/></div>
                    
                    <div>{this.renderLists()}</div> 
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
 
    return {
      newsArray: state.news,
    };
};

export default connect(mapStateToProps)(News);