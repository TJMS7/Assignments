import React from 'react'
import SectionStyle from './SectionStyle.css'
import IMG1 from './IMG1.png'

export default function Section() {
    return (
        <>
            <div className="container mt-3 ">
                <div className="row" style={{ SectionStyle }}>
                    <div className="col-md-6">
                        <h1 style={{ color: "black" }}>Making the most of the ever-growing</h1>
                        <h1 className="my-2" style={{ color: "rgb(224, 63, 63)" }}>Information Technology</h1>
                        <h4 className="my-4">Managed by a team of professional experts with extensive experience and impressive track record</h4>
                        <div className="text-center">
                            <button type="button" className="btn btn-danger">Read More</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={IMG1} alt="IMG.PNG" />
                    </div>
                </div>
            </div>
        </>
    )
}
