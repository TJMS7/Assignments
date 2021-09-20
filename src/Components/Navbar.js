import React from 'react'
import NavStyle from './NavStyle.css'
import { FaBars} from "react-icons/fa";
import Navicon from './Navicon'



export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ NavStyle }}>
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><FaBars /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Technology</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Client
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Partner</a>
                            </li>
                        </ul>
                    </div>
                    <Navicon />
                </div>
            </nav>
        </>
    )
}
