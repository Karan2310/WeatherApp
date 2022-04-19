import React from 'react'
import './Loading.css'

const Loading = () => {
    return (
        <div className='container-fluid loadBody'>
            <div id="load">
                <div>G</div>
                <div>N</div>
                <div>I</div>
                <div>D</div>
                <div>A</div>
                <div>O</div>
                <div>L</div>
            </div>

            <div id='ins'>
                <p> <b>Please wait...</b><br /> We are travelling to get you the exact weather</p>
            </div>
        </div>
    )
}

export default Loading