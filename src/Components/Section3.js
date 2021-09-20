import React from 'react'
import SectionStyle3 from './SectionStyle3.css'
import section31 from './section31.png'
import section32 from './section32.png'
import section33 from './section33.png'

export default function Section3() {
    return (
        <>
            <div className="container mt-2">
                <h2 style={{textAlign:"center", marginTop:"80px"}}>Product and Services</h2>
                <div className="row" style={{ SectionStyle3, marginTop:"40px" }}>
                    <div className="col-md-4">
                        <div className="card" style={{border:"none"}}>
                            <img src={section31} className="card-img-top img3" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Our Product</h5>
                            <p className="card-text">Our product is made on the base of our teams's careful research and analyses, ranging ranging from internet based application.</p>
                            <a href="/" className="btn btn-danger">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card" style={{border:"none"}}>
                            <img src={section32} className="card-img-top img3" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Our Service</h5>
                            <p className="card-text">DSI's shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</p>
                            <a href="/" className="btn btn-danger">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card" style={{border:"none"}}>
                            <img src={section33} className="card-img-top img3" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Our Technology</h5>
                            <p className="card-text">First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>
                            <a href="/" className="btn btn-danger">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
