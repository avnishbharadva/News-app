import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';

export default class News extends Component {
    articles = [];

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e9a892c9cedb4113b19b55c629325d40`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({loading:false})
        this.setState({ articles: parsedData.articles })

    }

    render() {

        return (
            <div className='container'>
                <h2 className='my-3 text-center'>AV-News - Top headlines</h2>
                {this.state.loading && <Loading/>}
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4 my-3' key={element.url}>
                            <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage?element.urlToImage:'https://images.hindustantimes.com/img/2022/05/16/1600x900/FRANCE-FEATURE-SUNSET-0_1652697182806_1652697233108.jpg'} newsUrl={element.url} />
                        </div>
                    })}
                </div>

                <div className="text-center mb-3">
                    <button type="button" className="mx-3 btn btn-info">&#8592; Previous</button>
                    <button type="button" className="btn btn-info">Next &#8594;	</button>
                </div>
            </div>
        )
    }
}
