import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class NewsBody extends Component {
    static defaultProps = {
        country : "in",
        pageSize:6,
        category:"general"
    }
    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category: PropTypes.string
    }
    constructor(){
        super();
        this.state = {
            articles:[],
            loading:false,
            page:1,
        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country="+(this.props.country)+"&category="+(this.props.category)+"&apikey=c86fbdbbde0745ebb0f9a8d5e46294ba&pageSize="+(this.props.pageSize);
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading:false})
        console.log(parsedData);
        this.setState({articles : parsedData.articles, totalResults : parsedData.totalResults})
    }
    handleNextClick = async ()=>{
        console.log("Next");
        let url="https://newsapi.org/v2/top-headlines?country="+(this.props.country)+"&pageSize="+(this.props.pageSize)+"&category="+(this.props.category)+"&apikey=c86fbdbbde0745ebb0f9a8d5e46294ba&page="+(this.state.page+1);
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading:false})
        console.log(parsedData);
        this.setState({articles : parsedData.articles})
        this.setState({
            page: this.state.page+1,
        })
    }
    handlePreviousClick = async () =>{
        console.log("Previous");
        let url="https://newsapi.org/v2/top-headlines?country="+(this.props.country)+"&pageSize="+(this.props.pageSize)+"&category="+(this.props.category)+"&apikey=c86fbdbbde0745ebb0f9a8d5e46294ba&page="+(this.state.page-1);
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading:false})
        console.log(parsedData);
        this.setState({articles : parsedData.articles})
        this.setState({
            page: this.state.page-1,
        })
    }
  render() {
    
    return (
      <div className='py-5' style={this.props.theme}>
        <h2 className='mx-5'>Trendy News Topics Headlines</h2>
        <div className="d-flex justify-content-center">
        {this.state.loading && <Spinner style={{mixBlendMode:"color-burn"}}/>}
        </div>
        {!(this.state.loading) && <div className='container my-5  d-flex justify-content-center'>
            <div className='row'>
            {this.state.articles.map((element)=>{
            return (<div className='col-md-4 my-3' key={element.url} >
                <NewsItem author={element.author} date={element.publishedAt} title={element.title?element.title.slice(0,40):" "} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} 
                           newsurl={element.url} />
                </div>)})}
                
            </div>
        </div>}
        <div className='container flex' > 
        <div className='row'>
            <div className="col">
            {!(this.state.loading) && <button style={this.props.button} disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; PREV</button>}
            </div>
            <div className='col d-flex justify-content-end'>
                {!(this.state.loading) && <button style={this.props.button} disabled={this.state.page === Math.ceil(this.state.totalResults/(this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>NEXT &rarr;</button>}
                </div>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsBody