import React from 'react'
import F1 from './F1.png'
import F2 from './F2.png'
import F3 from './F3.png'
import F4 from './F4.png'
import F5 from './F5.png'
import F6 from './F6.png'
import SectionStyle5 from './SectionStyle5.css'

export default function Section5() {
    return (
        <>
            <div className="container mt-3">
                <div className="row" style={{marginLeft:"50px"}}>
                    <div className="col-md-4">
                        <div className="demo-content">
                            <h3>Address</h3>
                            <h6><b>PT Dwidasa Samsara Indonesia</b><br/>Ruko Jalur Sutera 29A No.53<br/> Alam Sutera Serpong, <br/>Tangerang 15323</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="demo-content bg-alt">
                            <h3>Contact</h3>
                            <h6>Phone: +62.21.5314.1135<br/>Fax: +62.21.5314.1135<br/>Email: community@dwidasa.com</h6>
                        </div>
                    </div>
                    <div className="col-md-5" style={{SectionStyle5}}>
                        <div className="demo-content bg-alt">
                        <img className="img5" src={F1} alt="F1"/>
                        <img className="img5" src={F2} alt="F2"/>
                        <img className="img5" src={F3} alt="F3"/>
                        <br/>
                        <img className="img5" src={F4} alt="F4"/>
                        <img className="img5" src={F5} alt="F5"/>
                        <img className="img5" src={F6} alt="F6"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
