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
    <DualInfoblock heading="Our Team " text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore corporis quidem recusandae dolores atque nemo accusamus quod ratione, nam qui non eaque temporibus, earum inventore at itaque beatae, labore iste! Hic facilis totam vel alias laboriosam minima consectetur quis. Laudantium nobis iure reiciendis, laborum voluptate dignissimos ex ducimus veritatis asperiores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa voluptate omnis eius delectus numquam temporibus voluptatem maxime deleniti culpa quasi! Dicta pariatur aut molestiae laudantium labore omnis tempora minima deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eius deserunt voluptatem sapiente consequuntur sunt doloremque reiciendis inventore, ipsam nulla, quam omnis in perspiciatis amet sint? Recusandae quod ratione fuga. Odit quibusdam qui, quae corrupti quo sapiente, ea obcaecati excepturi libero ipsam ullam aliquam. Unde eum et saepe expedita nostrum!" src="https://lh3.googleusercontent.com/LMXzqEq_OX5ENURRTdeqOFFPHTfJcrKf0MkPl5AbZnx7bZPsKudBYwtA1snjY4AlkV9NxlubAWR5AGX0tC1KNiwEPiyj82SmhDdwXfe_Mo8ZQ55aFIhkTSXRxoP1Eq53fXMc0dp9eiA0zQmQGUtcnDil0jV3tSS8ztJL5LCyRxEyrPF-vxmGNRWKvFDeFMhJ6vH5bG9Z3WGDJjMOPBwA1STzPy1UatjDm6cqj4YirStnNQfNb9YBjut4WGO0q7hPLYVapO9hqbURCx0MfRJRDMS3fjoNf83BSFmpbUk7eNZ7wC91uX8gX5Y5RA0f7Z5FMGRIhY7rl2G3ixGmN9q2FcVA1oun923pXfC1UCPsBM5A6oDv4nTE48UPqjGNr3oYCbOooLUBTNK6MZ95blZqq42OTxcQqSmkzAObJ45sia7kMj4FRWhoDPfFlG01J8B4kn42s8O31HZCn3b1aL5RsE3gjbe4jVPj_-oFFUmyxfDxkQpEQbbxl-5yg1ptw3VerdN-kcicIAWGLeOkv8kGbvHhtme7M4nM8WYZpiA1YSHwWY9XbWTqyuJmVbxDj8odRo713rrbv3FBymfOROcGAR1dvU5YDeAxAyGxau2LADImoHm31OyBpYypJEQ8TL7oCGbiNNkvGpJxEx9wJGpcdQHahR4ypZk=w280-h210-no" />
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
