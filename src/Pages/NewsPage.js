import React from "react";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

import {removeNews} from "../actions"

class NewsPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            id : this.props.match.params.id
        }
    }
    
    render(){
        const goBack=()=>{
            
            this.props.history.replace("/news");
        }

        const deleteList=()=>{
        this.props.removeNews(this.props.newsArray[this.props.match.params.id])
        this.props.history.replace("/news");

        }
        return(
            <React.Fragment>
                <div>
                    <h1>NewsSite</h1>
      <ol className="breadcrumb">
    <li className="breadcrumb-item">
        <a href="/">Home</a>
    </li>
    <li className="breadcrumb-item active">{"news/"+this.state.id}</li>
</ol>
        <div className="container">
<h1 className="mt-4 mb-3">{this.props.newsArray[this.state.id].headline}
</h1>

<div className="row">
    <div className="col-lg-8">
        <p >{this.props.newsArray[this.state.id].description}</p>
        <hr/>
    </div>
    <div className="col-md-4">
        <div className="align-bottom">
             <div className="card-footer text-muted ">
  By {this.props.newsArray[this.state.id].author}
     

    </div>
    <div className="card-footer text-muted d-inline">
    {this.props.newsArray[this.state.id].date}
     
    </div>
    </div>
   
</div>
</div>
<Button onClick={goBack} className="justify-content-start">Go Back!</Button>

<Button onClick={deleteList} className=" justify-content-end" >Delete!</Button>

                </div>
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

export default withRouter(connect(mapStateToProps,{removeNews})(NewsPage));