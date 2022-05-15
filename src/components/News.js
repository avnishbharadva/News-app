import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
    articles = [];

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount(){
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=e9a892c9cedb4113b19b55c629325d40';
        
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({articles: parsedData.articles})

    }

    render() {
        
        return (
            <div className='container my-3'>
                <h2>AV-News - Top headlines</h2>
                <div className='row'>
                    {this.state.articles.map((element)=>{
                        return <div className='col-md-4' key={element.url}>
                            <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}
                    </div>
                
                {/* <div className='row'>
                    {this.state.articles.map((element)=>{
                        return <div className='col-md-4' key={element.url}>
                            <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}
                </div> */}
            </div>
        )
    }
}
