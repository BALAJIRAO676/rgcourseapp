import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function DualInfoblock({heading, text, src}) {
    return (
        <section className="my-4 py-4 bg-theme ">
        <div className="container">
            <Heading title={heading} />
            <div className="row">
                <div className="col-8 mx-auto">
                    <p className="lead text-white mb-5 justify">
                        {text}
                    </p>
                </div>
                    <div className="col-4">
                    <div className="card bg-dark" >
                        <img className="card-img-top" src={src} alt="image goes here" />
                         <div className="card-body ">
                            <h5 className="card-title text-success">Just click photos</h5>
                            <p className="card-text text-white">We just love to click photos all the time :) </p>
                            <Link to="#" className="btn btn-warning btn-block mx-auto ">
                                {heading}
                            </Link>
                    </div>
                    </div>
                </div>
        
            </div>
        </div>
        </section>
    )
}
