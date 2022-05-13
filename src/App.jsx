import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AboutUs from './pages/AboutUs'
import BitcoinInfo from './pages/BitcoinInfo'
import BlockchainInfo from './pages/BlockchainInfo'
import ContactUs from './pages/ContactUs'
import CurrencyConverter from './pages/CurrencyConverter'
import LandingPage from './pages/LandingPage'
import { Auth0Provider } from "@auth0/auth0-react";


const App = () => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    return (
        <>
            <Auth0Provider
                domain={domain}
                clientId={clientId}
                redirectUri={window.location.origin}
                useRefreshTokens
                cacheLocation="localstorage"
            >

                <Router>
                    <Routes>



                        <Route path="/" element={<LandingPage />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/exchange" element={<CurrencyConverter />} />
                        <Route path="/contactus" element={<ContactUs />} />


                        <Route path="/blockchain-info" element={<BlockchainInfo />} />
                        <Route path="/bitcoin-info" element={<BitcoinInfo />} />

                        <Route path="/currencyexchange" element={<CurrencyConverter />} />

                    </Routes>

                </Router>

            </Auth0Provider>


        </>
    )
}

export default App