import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/infoblock'
import DualInfoblock from '../components/Reusable/DualInfoblock'
import Teamphotosection from '../components/About/Teamphotosection'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img = {data.img.childImageSharp.fluid}
    title="About My Team"
    subtitle=""
    heroclass="about-background"
    />
    <DualInfoblock heading="A message from CEO " text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore corporis quidem recusandae dolores atque nemo accusamus quod ratione, nam qui non eaque temporibus, earum inventore at itaque beatae, labore iste! Hic facilis totam vel alias laboriosam minima consectetur quis. Laudantium nobis iure reiciendis, laborum voluptate dignissimos ex ducimus veritatis asperiores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa voluptate omnis eius delectus numquam temporibus voluptatem maxime deleniti culpa quasi! Dicta pariatur aut molestiae laudantium labore omnis tempora minima deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eius deserunt voluptatem sapiente consequuntur sunt doloremque reiciendis inventore, ipsam nulla, quam omnis in perspiciatis amet sint? Recusandae quod ratione fuga. Odit quibusdam qui, quae corrupti quo sapiente, ea obcaecati excepturi libero ipsam ullam aliquam. Unde eum et saepe expedita nostrum!" src="https://i1.wp.com/cybernoob.in/wp-content/uploads/bb-plugin/cache/balaji-848x1024-square.jpg?w=688&ssl=1" />
    <Infoblock heading="About Vision"/>
    <Teamphotosection />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
     childImageSharp {
       fluid {
        ...GatsbyImageSharpFluid_tracedSVG
       }
     }
   }
}
`

export default AboutPage
