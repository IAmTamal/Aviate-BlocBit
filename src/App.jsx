import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import CurrencyConverter from './pages/CurrencyConverter'
import LandingPage from './pages/LandingPage'

const App = () => {
    return (
        <>

            <Router>
                <Routes>



                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/exchange" element={<CurrencyConverter />} />
                    <Route path="/contactus" element={<ContactUs />} />

                </Routes>
            </Router>


        </>
    )
}

export default App