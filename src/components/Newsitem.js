import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {

        let {title,description,imageUrl,newsUrl} = this.props;

        return (
            <div>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-info">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
