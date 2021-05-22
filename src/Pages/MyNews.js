import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions';

//Button will move to modify page of the news
class MyNews extends React.Component {
    componentDidMount() {
        this.props.fetchNews();
    };
    
    render() {
        return(
            <React.Fragment>
                <div >
                    <h1 >My News</h1>
                    <div className="container" >
                        <div className="row" >
                            <div className="col-4" >{news.headline}</div>
                            <div className="col-2" >{news.author}</div>
                        </div>
                        <div className="row" >
                            <div className="px-4">{news.description}</div>
                        </div>
                        <button onClick={modifyNews} class="btn btn-primary">Modify</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }     
}

const mapStateToProps = state => {
    return { news: state.news }
}

export default connect(mapStateToProps, { fetchNews: fetchNews })(MyNews);