import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
    render() {
        return (
            <>
                <div className='row'>

                    <div className='col-sm-4'>
                        <Newsitem />
                    </div>
                    <div className='col-sm-4'>
                        <Newsitem />
                    </div>
                    <div className='col-sm-4'>
                        <Newsitem />
                    </div>
                </div>
            </>
        )
    }
}
