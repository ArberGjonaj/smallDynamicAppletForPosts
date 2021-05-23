import React from 'react';
import Axios from '../Axios/server';

//Button will move to modify page of the news
//Fetch request will take the list from the backend
class MyNews extends React.Component {
    componentDidMount() {
        const response = Axios.get('/news').then(function(response){
            console.log(response);
        })
    }
    
    render() {
        return(
            <React.Fragment>
                <div>
                    <h1 >My News</h1>
                    <div className="container" >
                        <div className="row" >
                            <div className="col-4" >Title</div>
                            <div className="col-2" >Author</div>
                        </div>
                        <div className="row" >
                            <div className="px-4">Description</div>
                        </div>
                        <button onClick={null} class="btn btn-primary">Modify</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }     
}

const mapStateToProps = state => {
    return { myNews: state.news }
}

export default MyNews;
