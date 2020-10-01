import React,{useState} from "react";
import {
    Button,
    Col,
    Form,
  } from "react-bootstrap";


function Create(){
    const [headline, setHeadline] = useState(null);
    const [description, setDescription] = useState(null);
    const [author, setAuthor] = useState(null);
    const [date, setDate] = useState(null);
    const [news,setNews]=useState([]);
    

    const addNews = event => {
        event.preventDefault();
        setNews([
          ...news,
          {
              id:localStorage.getItem("id"),
            headline: headline,
            description: description,
            author:author,
            date:date
          }
        ]);
     localStorage.setItem("id",localStorage.getItem("id")+1)
      };
   const   onChangeValue = event => {
        this.setState({ value: event.target.value });
      };
         return(
            <React.Fragment>
        <div className="px-3 d-flex-vertical justify-content-center">
        <h3 className=" justify-content-center ">
           
                 News Site
                 </h3>
               
             
<div>
<Form>
  
    <Form.Group as={Col} controlId="formGridHeadline">
      <Form.Label>HeadLine</Form.Label>
      <Form.Control onChange={(event )=>setHeadline({ headline: event.target.value })} type="text" placeholder="Headline" />
    </Form.Group>

    <Form.Group as={Col}  controlId="formGridDescription">
      <Form.Label>Description</Form.Label>
      <Form.Control onChange={(event )=>setDescription({ description: event.target.value })}  as="textarea" rows="3" placeholder="Description" />
    </Form.Group>
  
    <Form.Row>
    <Form.Group as={Col}  controlId="formGridDescription">
      <Form.Label>Author</Form.Label>
      <Form.Control onChange={(event )=>setAuthor({ author: event.target.value })} type="text"  placeholder="Authors" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Date</Form.Label>
      <Form.Row>
        <Form.Control type="date"  placeholder="Date" />
       
        </Form.Row>
    </Form.Group>

 
</Form.Row>
<div className="d-flex justify-content-center">  <Button className={"btn-block"}  variant="primary" type="submit">
    Create News
  </Button>
  </div>

</Form>
</div>
</div>

      
     
        </React.Fragment>
        )
     }
         
    




export default React.memo(Create);