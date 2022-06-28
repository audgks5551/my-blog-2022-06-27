import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/clifford.jpg" //file system 내의 이미지도 가능
          /*src="https://picsum.photos/id/237/200/300"*/ //웹에서 받아오기
        />
      </Layout>
    </main>
  )
}

export default HomePage;