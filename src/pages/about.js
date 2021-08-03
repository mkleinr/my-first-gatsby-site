//Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
//Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <title> About Me</title>
            <Layout pageTitle="About Me">
                <p>This site was created by Gatsby and I am a noob trying</p>
            </Layout>
        </main>
    )
}
//Step 3: Export your component
export default AboutPage