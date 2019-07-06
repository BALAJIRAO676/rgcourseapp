import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam eligendi reprehenderit ducimus earum ad consequuntur quia necessitatibus voluptatibus quod aspernatur dolorem, eos laboriosam culpa nesciunt placeat assumenda. Aliquid id, necessitatibus, ipsam nulla odit minus amet dolores quo eligendi optio assumenda magni maiores, tenetur placeat nobis omnis natus. Consequuntur excepturi incidunt id, facilis earum eum harum? Facilis nisi commodi nam molestias.
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
