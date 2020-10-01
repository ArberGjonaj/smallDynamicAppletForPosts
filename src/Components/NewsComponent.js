import React from "react";


class NewsComponent extends React.Component{
    state={
        titletext:this.props.titletext,
        idOfPost:this.props.postId,
        authorOfPost:this.props.authorOfPost,
        dateOfPost:this.props.dateOfPost
    }

    render(){

        console.log(this.props.imagesource);
console.log(this.props.name)

        return(<div>
<a href={"http://localhost:3000/helpPage/" + this.state.idOfPost}>
    <div className="card mb-4">

    <div className="card-body">
        <div className="row">
            <div className="col-lg-6">
                <h4 className="card-title">{this.state.titletext}</h4>

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
export default NewsComponent;