import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/infoblock'
import DualInfoblock from '../components/Reusable/DualInfoblock'
import Coursecart from '../components/Card/Coursecard'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img = {data.img.childImageSharp.fluid}
    title="I write code"
    subtitle="LearnCodeOnline.in"
    heroclass="hero-background"
    />
    <Infoblock heading="About Us"/>
    <Coursecart courses={data.courses} />
    <DualInfoblock heading="Our Team " src="https://www.projecttimes.com/media/k2/items/cache/6612da61425d98755836902a8bde1bce_XL.jpg"  text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore corporis quidem recusandae dolores atque nemo accusamus quod ratione, nam qui non eaque temporibus, earum inventore at itaque beatae, labore iste! Hic facilis totam vel alias laboriosam minima consectetur quis. Laudantium nobis iure reiciendis, laborum voluptate dignissimos ex ducimus veritatis asperiores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa voluptate omnis eius delectus numquam temporibus voluptatem maxime deleniti culpa quasi! Dicta pariatur aut molestiae laudantium labore omnis tempora minima deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eius deserunt voluptatem sapiente consequuntur sunt doloremque reiciendis inventore, ipsam nulla, quam omnis in perspiciatis amet sint? Recusandae quod ratione fuga. Odit quibusdam qui, quae corrupti quo sapiente, ea obcaecati excepturi libero ipsam ullam aliquam. Unde eum et saepe expedita nostrum!" />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
     childImageSharp {
       fluid {
        ...GatsbyImageSharpFluid_tracedSVG
       }
     }
   }

courses: allContentfulCourses{
  edges {
    node {
      id
      title
      price
      category
      description {
        description
      }
    image{
      fixed(width: 200, height: 120){
        ...GatsbyContentfulFixed_tracedSVG
      }
    }  
    }
  }
}
}
`

export default IndexPage
