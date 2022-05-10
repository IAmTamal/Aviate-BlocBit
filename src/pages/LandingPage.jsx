import React from 'react'
import Footer from '../components/Footer.jsx'
import HomeContainer from '../components/HomeContainer.jsx'
import "../styles/LandingPage.css"

const LandingPage = () => {
    return (
        <>

            <div className="landingpage_parent">

                <HomeContainer />

                <Footer />

            </div>
        </>
    )
}

export default LandingPage