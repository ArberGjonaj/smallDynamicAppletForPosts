import React from "react";
import { withRouter } from "react-router-dom";

class NewsComponent extends React.Component{
    state={
        titletext:this.props.bodytext,
        header:this.props.header,
        authorOfPost:this.props.authorOfPost,
        dateOfPost:this.props.dateOfPost,
        idOfPost:this.props.idOfPost
    }

    render(){
const onClick =(event)=>{
    event.preventDefault();
    this.props.history.push("/news/"+this.state.idOfPost);
}
        console.log(this.props.imagesource);
console.log(this.props.name)

        return(<div>
<a onClick={onClick}>
    <div key={this.props.idOfPost} className="card mb-4 d-flex justify-content-center">

    <div className="card-body">
        <div className="row">
            <div className="col-lg-6">
                <h4 className="card-title">
                   {this.state.header}
                    </h4>
               {this.state.titletext}
            </div>
            
        </div>
        <div className="card-footer text-muted d-inline">
  By{this.state.authorOfPost}
     

    </div>
    <div className="card-footer text-muted d-inline">
    {this.state.dateOfPost}
     

    </div>
    </div>

</div>   </a>
</div>
)
}}
export default withRouter(NewsComponent);