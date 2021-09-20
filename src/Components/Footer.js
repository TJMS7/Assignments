import React from 'react'
import {AiOutlineCopyright} from "react-icons/ai";
import FooterStyle from './FooterStyle.css'

export default function Footer() {
    return (
        <>  
            <div className="cont">
            <p className="copy" style={{FooterStyle}}>Copyright < AiOutlineCopyright /> 2015</p>
            </div>
        </>
    )
}
