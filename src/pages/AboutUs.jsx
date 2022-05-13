import React, { useState } from 'react'

import HomeParticles from '../components/HomeParticles'
import Navbar from '../components/Navbar'
import "../styles/BlockchainInfo.css"
import ab from "../assets/aboutus.svg"
import BlockchainDetails from '../components/BlockchainDetails'
import Footer from '../components/Footer'
import ExchangeCalculator from '../components/ExchangeCalculator.jsx'

const AboutUs = () => {




    return (

        <>

            <div className="blockpage_parent">

                <HomeParticles />

                <div className="container accordiancontainer">
                    <Navbar />


                    <div className="row blockchaininfo_row1">



                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 blockchaininfo_col1">

                            <div className="blockchaininfo_textdiv">
                                <p className='textdiv_welcome'>Here&apos;s all, <br /> about us. </p>
                                {window.innerWidth > 431 && <br />}

                                {window.innerWidth < 431 &&
                                    <div className='blockchain_img_mobdiv'>
                                        <img src={ab} alt="" className='blockchain_img_mob' />
                                    </div>
                                }

                                <p className='textdiv_ultimate'>
                                BlocBit is The ultimate place to learn everything you need to get started about Blockchains, Crypto and Bitcoins.<br /><br />

                                    We provide you step by step tutorials on Bitcoin, blockchains with all original docs witten in a much better sumarized manner for better understanding purposes along with a currency converter to take a look at the value.<br /><br />

                                </p>




                            </div>

                        </div>



                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                            <div className="blockchaininfo_imgdiv">

                                <img src={ab} alt="" className='bitcoinimg' />
                            </div>
                        </div>




                    </div>


                    
                </div>


                <div className="footer-div-parent">
                    <Footer />
                </div>

            </div>

        </>
    )
}

export default AboutUs