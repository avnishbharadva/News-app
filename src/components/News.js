import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';

export default class News extends Component {
    articles = [];

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults : 0
        }
    }

    async updateNews() {
        document.title = this.toCapitalize(this.props.category) + " - AV - News App";
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e9a892c9cedb4113b19b55c629325d40&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
            loading: false,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePrevious = async () => {
        this.setState({ page: this.state.page - 1 })
        this.updateNews()
        // document.title = this.toCapitalize(this.props.category) + " - AV - News App";
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e9a892c9cedb4113b19b55c629325d40&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // // console.log(parsedData);
        // this.setState({
        //     loading: false,
        //     articles: parsedData.articles,
        //     page : this.state.page - 1
        //     // totalResults: parsedData.totalResults
        // })
        console.log(this.state.page)
    }

    handleNext = async () => {
        
        this.setState({ page: this.state.page + 1 })
        this.updateNews()
        // document.title = this.toCapitalize(this.props.category) + " - AV - News App";
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e9a892c9cedb4113b19b55c629325d40&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // // console.log(parsedData);
        // this.setState({
        //     loading: false,
        //     articles: parsedData.articles,
        //     page : this.state.page + 1
        // })
        // console.log(this.state.totalResults)
        console.log(this.state.page)
    }

    toCapitalize =(categoryName)=>{
        return categoryName.charAt(0).toUpperCase().concat(categoryName.slice(1));
    }
    render() {

        return (
            <div className='container'>
                <h2 className='my-3 text-center'>AV-News - Top {this.toCapitalize(this.props.category)} headlines</h2>
                {this.state.loading && <Loading />}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-md-4 my-3' key={element.url}>
                            <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : 'https://images.hindustantimes.com/img/2022/05/16/1600x900/FRANCE-FEATURE-SUNSET-0_1652697182806_1652697233108.jpg'} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>

                <div className="text-center mb-3">
                    <button type="button" disabled={this.state.page <= 1} className="mx-3 btn btn-info" onClick={this.handlePrevious}>&#8592; Previous</button>
                    <button type="button" disabled={this.state.page>=this.state.totalResults/this.props.pageSize} className="btn btn-info" onClick={this.handleNext}>Next &#8594;	</button>
                </div>
            </div>
        )
    }
}
