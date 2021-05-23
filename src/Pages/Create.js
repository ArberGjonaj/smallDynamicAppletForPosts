import React from "react";
import { connect } from "react-redux";
import { addNews } from "../actions";
import { Button, Col, Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import NavBar from "../Components/NavBar";
class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      description:'',
      author:'',
      date:null
    };
  }
render(){

    const insertNews = event => {
        event.preventDefault();
        this.props.addNews([this.state.headline,this.state.description,this.state.author,this.state.date])
        this.props.history.push("/news");
        console.log(this.props.newsArray[0])
    }

    return (
      <React.Fragment>
                        <NavBar  ref1={"/news"} ref2={"/news/create"}
                 Item1={"News"} Item2={"Create"}/>
        <div className="px-3 d-flex-vertical justify-content-center">
          <h3 className=" justify-content-center ">News Site</h3>

          <div>
            <Form>
              <Form.Group as={Col} controlId="formGridHeadline">
                <Form.Label>HeadLine</Form.Label>
                <Form.Control value={this.state.headline} onChange={(event )=>this.setState({ headline: event.target.value })}  type="text" placeholder="Headline" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                onChange={(event )=>this.setState({ description: event.target.value })} 
                  as="textarea"
                  rows="3"
                  placeholder="Description"
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridDescription">
                  <Form.Label>Author</Form.Label>
                  <Form.Control  onChange={(event )=>this.setState({ author: event.target.value })} type="text" placeholder="Authors" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Date</Form.Label>
                  <Form.Row>
                    <Form.Control onChange={(event)=>this.setState({date:event.target.value})} type="date" placeholder="Date" />
                  </Form.Row>
                </Form.Group>
              </Form.Row>
              <div className="d-flex justify-content-center">
                {" "}
                <Button
                  onClick={insertNews}
                  className={"btn-block"}
                  variant="primary"
                  type="submit"
                >
                  Create News
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    newsArray: state.news,
  };
};

export default withRouter(connect(mapStateToProps, { addNews })(Create));
