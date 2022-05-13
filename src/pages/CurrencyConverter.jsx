import React, { useState } from 'react'

import HomeParticles from '../components/HomeParticles'
import Navbar from '../components/Navbar'
import "../styles/BlockchainInfo.css"
import ex from "../assets/exchange.svg"
import BlockchainDetails from '../components/BlockchainDetails'
import Footer from '../components/Footer'
import ExchangeCalculator from '../components/ExchangeCalculator.jsx'

const CurrencyConverter = () => {




    return (

        <>

            <div className="blockpage_parent">

                <HomeParticles />

                <div className="container accordiancontainer">
                    <Navbar />


                    <div className="row blockchaininfo_row1">



                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 blockchaininfo_col1">

                            <div className="blockchaininfo_textdiv">
                                <p className='textdiv_welcome'>Know the, <br /> exchange rate !! </p>
                                {window.innerWidth > 431 && <br />}

                                {window.innerWidth < 431 &&
                                    <div className='blockchain_img_mobdiv'>
                                        <img src={ex} alt="" className='blockchain_img_mob' />
                                    </div>
                                }

                                <p className='textdiv_ultimate'>
                                    Hello there, take a look at the currency exchange calculator which uses real value from API with all updated data to Convert x value in the provided currency to btc. <br /><br />

                                    These are original value, all you need to do is select your country and enter the value !! <br /><br />

                                </p>




                            </div>

                        </div>



                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                            <div className="blockchaininfo_imgdiv">

                                <img src={ex} alt="" className='bitcoinimg' />
                            </div>
                        </div>




                    </div>


                    <ExchangeCalculator />
                </div>


                <div className="footer-div-parent">
                    <Footer />
                </div>

            </div>

        </>
    )
}

export default CurrencyConverter