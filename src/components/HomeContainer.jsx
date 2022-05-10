import React from 'react'
import HomeParticles from './HomeParticles'
import Navbar from "./Navbar"
import "../styles/HomeContainer.css"
import blockchainimg from "../assets/blocks1.svg"
import BitcoinHome from './BitcoinHome'
import BlockchainHome from './BlockchainHome'


const HomeContainer = () => {




    return (
        <>
            <div className='homeparent'>

                <HomeParticles />

                <div className="container">

                    <Navbar />

                    <div className="home_contentdiv container-fluid">
                        <div className="row">



                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">

                                <div className="home_textdiv">
                                    <p className='textdiv_welcome'>Welcome to <br /> BlocBit</p>

                                    {window.innerWidth < 431 &&
                                        <div className='blockchain_img_mobdiv'>
                                            <img src={blockchainimg} alt="" className='blockchain_img_mob' />
                                        </div>
                                    }


                                    <p className='textdiv_ultimate'>The ultimate place to learn everything you need to get started about Blockchains, Crypto and Bitcoins.</p>

                                    <br />

                                    <p className='textdiv_tryour'>Try our brand new currency exchange calculator !!</p>

                                    <div className="btn_div">
                                        <button className='btn btn-warning currexbtn'>CurrEx &gt; </button>
                                    </div>
                                </div>

                            </div>


                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="home_imgdiv">

                                    <img src={blockchainimg} alt="" className='blockchain_img' />
                                </div>
                            </div>

                        </div>

                        <BitcoinHome />

                        <BlockchainHome />


                    </div>


                </div>



            </div>


        </>
    )
}

export default HomeContainer