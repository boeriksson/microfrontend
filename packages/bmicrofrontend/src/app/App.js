import React from 'react'
import Sub from './subdirectory/Sub'
// import './App.less';

export default (props) => {
    const {foo, bar} = props
    return (
        <div className="app">
            <h1>{foo}</h1>
            <Sub bar={bar}/>
        </div>
    )
}