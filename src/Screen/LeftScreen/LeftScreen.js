import React from 'react'
import './LeftScreen.css'

const LeftScreen = ({ handleInputChange, handleSearchCity, input }) => {
    return (
        <>
            <div className="container-fluid left m-0 p-0">
                <div className="container-fluid d-flex flex-column flex-lg-row align-items-center justify-content-between p-4">
                    <h1 className='fw-600' style={{ wordSpacing: "0.5rem" }}>Weather Forecast</h1>
                    <div id='searchPlace' className='d-flex align-items-center mt-3 mt-lg-0'>
                        <i className="fa-solid fa-magnifying-glass me-2" ></i>
                        <form className="w-100" onSubmit={handleSearchCity}>
                            <input type="text" placeholder='search new places' onChange={handleInputChange} value={input} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftScreen