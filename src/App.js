import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

    apiKey = process.env.REACT_APP_NEWS_API;

    state = {
        progress : 0
    }

    setProgress = (progress) =>{
        this.setState({
            progress: progress
        })
    }
    render() {
        return (

            <>
                <BrowserRouter>
                    <LoadingBar
                        color='#e605d7'
                        progress={this.state.progress}
                        height={3}
                        // onLoaderFinished={() => setProgress(10)}
                    />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general1" category="general" pageSize="9" />} />
                        <Route path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" category="business" pageSize="9" />} />
                        <Route path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" category="entertainment" pageSize="9" />} />
                        <Route path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general2" category="general" pageSize="9" />} />
                        <Route path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" category="health" pageSize="9" />} />
                        <Route path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" category="science" pageSize="9" />} />
                        <Route path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" category="sports" pageSize="9" />} />
                        <Route path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" category="technology" pageSize="9" />} />
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}


