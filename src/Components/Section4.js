import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import SectionStyle4 from './SectionStyle4.css'
import under from './under.png'
import cardimg from './cardimg.jpg'


export default function Section4() {
    return (
        <>
            <div className="container mt-3" style={{ SectionStyle4 }}>
                <h2 style={{ textAlign: "center", marginTop: "100px" }}>Mobile Specialist</h2>
                <img className="underi" src={under} alt="underline" />
                <div className="row" style={{ marginTop: "50px"}}>
                    <div className="col-md-3">
                        <div className="card4">
                            <img className="card-img-top img4" src={cardimg} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", color: "rgb(250, 94, 94)" }}><b>System Analyst</b></h5>
                                <h4 className="card-text" style={{ textAlign: "center" }}><b>Rodney Stratton</b></h4>
                                <ul className="list-inline smicon">
                                    <li className="list-inline-item">
                                        <a className="link " href="/"><FaFacebook /></a>
                                    </li>
                                    <li className="list-inline-item ">
                                        <a className="link" href="/"><FaInstagram /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="link" href="/"><FaTwitter /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card4">
                            <img className="card-img-top img4" src={cardimg} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", color: "rgb(250, 94, 94)" }}><b>System Analyst</b></h5>
                                <h4 className="card-text" style={{ textAlign: "center" }}><b>Rodney Stratton</b></h4>
                                <ul className="list-inline smicon">
                                    <li className="list-inline-item">
                                        <a className="link " href="/"><FaFacebook /></a>
                                    </li>
                                    <li className="list-inline-item ">
                                        <a className="link" href="/"><FaInstagram /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="link" href="/"><FaTwitter /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card4">
                            <img className="card-img-top img4" src={cardimg} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", color: "rgb(250, 94, 94)" }}><b>System Analyst</b></h5>
                                <h4 className="card-text" style={{ textAlign: "center" }}><b>Rodney Stratton</b></h4>
                                <ul className="list-inline smicon">
                                    <li className="list-inline-item">
                                        <a className="link " href="/"><FaFacebook /></a>
                                    </li>
                                    <li className="list-inline-item ">
                                        <a className="link" href="/"><FaInstagram /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="link" href="/"><FaTwitter/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card4">
                            <img className="card-img-top img4" src={cardimg} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", color: "rgb(250, 94, 94)" }}><b>System Analyst</b></h5>
                                <h4 className="card-text" style={{ textAlign: "center" }}><b>Rodney Stratton</b></h4>
                                <ul className="list-inline smicon">
                                    <li className="list-inline-item">
                                        <a className="link " href="/"><FaFacebook /></a>
                                    </li>
                                    <li className="list-inline-item ">
                                        <a className="link" href="/"><FaInstagram /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="link" href="/"><FaTwitter/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
