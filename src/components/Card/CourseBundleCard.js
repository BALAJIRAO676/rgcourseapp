import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import Img from 'gatsby-image'


export default class CourseBundleCard extends Component {

    constructor(props){
        super(props)
        this.state ={
            courses: props.courses.edges,
            mycourses: props.courses.edges,
            
        }
    }

    render() {
        // console.log(this.state.courses)
         return (
             <div>
              <section className="py-5">
                 <div className="container">
                     <Heading title="Course Bundles"/>
                     
                     <div className="row">
                         {this.state.mycourses.map(({node}) => {
                             return (
                                 <div
                                 key={node.id}
                                 className="col-11 col-md-6 d-flex mx-auto my-3"
                                 >
 
                                     <Img fixed={node.image.fixed} />
                                     <div className="flex-grow-1 px-3">
                                         <div className="d-flex justify-content-between">
                                             <h6 className="mb-0">{node.title}</h6>
                                             <h6 className="mb-0 text-success">${node.price}</h6>
                                         </div>

                                     <button 
                                     data-item-id={node.id}
                                     data-item-name={node.title}
                                     data-item-price={node.price}
                                     data-item-url="https://thebalajiraoecommerce.netlify.com/"
                                     data-item-image={node.image.fixed.src}
                                     className="btn btn-warning snipcart-add-item">
                                     Join Now
                                     </button>
                                     </div>
                                 </div>
                             )
                         })
 
                         }
                     </div>
                 </div>
              </section>
             </div>
         )
     }
}
