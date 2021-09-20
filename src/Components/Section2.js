import React from 'react'
import SectionStyle2 from './SectionStyle2.css'
import pana1cropped from './pana1cropped.svg'

export default function Section() {
    return (
        <>
            <div className="cont">
                <div className="container mt-2 ">
                    <div className="row" style={{
                        SectionStyle2, backgroundColor: "#EEEEEE", paddingTop: "100px", paddingLeft: "30px",
                        paddingRight: "30px", marginTop: "0px"
                    }}>
                        <div className="col-md-6" data-aos="zoom-in">
                            <img className="img1" src={pana1cropped} alt="IMG.PNG" />
                        </div>
                        <div className="col-md-6">
                            <h2>Welcome to <span style={{ color: "rgb(250, 94, 94)" }} >Dwidasa Samsara Indonesia (DSI)</span> </h2>
                            <h5 className="my-4">Dwidasa Samsara Indonesia "(DSI)" was firstly established in 2010 by the founders, who each of them
                                has a commom end objective to innovate new creations by making the most of the ever-growing
                                information technology through DSI's distinct front-end based application concept.
                                <br />
                                <br />
                                Managed by a team of professional experts with extensive experienc and impressive track records, DSI believes that
                                continuous improvements and innovations assure your business to run effectively and efficiently.</h5>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
