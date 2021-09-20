import React from 'react'
import { AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import { FaRandom} from "react-icons/fa";
import NaviconStyle from './NaviconStyle.css'

export default function Navicon() {
    return (
        <><div>
            <ul className="navbar-icon list-inline" style={{NaviconStyle}}>
                <li className="nav-item list-inline-item">
                    <a className="nav-link " href="/"><AiOutlineHome/></a>
                </li>
                <li className="nav-item list-inline-item ">
                    <a className="nav-link" href="/"><AiOutlineMail /></a>
                </li>
                <li className="nav-item list-inline-item">
                    <a className="nav-link" href="/"><FaRandom/></a>
                </li>
            </ul>
            </div>
        </>
    )
}
