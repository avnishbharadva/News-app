import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {

        let { title, description, imageUrl, newsUrl, author, date,source } = this.props;

        return (
            <div>
                <div className="card">
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-info text-dark" style={{zIndex:'1'}}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-info">Read More</a>
                        <p className="card-text mt-2"><small className="text-dark">By {author ? author : 'Unknown'} on {new Date(date).toUTCString()}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}
