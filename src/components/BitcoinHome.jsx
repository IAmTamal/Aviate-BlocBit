import React from 'react'
import Navbar from "./Navbar"
import "../styles/HomeContainer.css"
import blockchainimg from "../assets/bit1.svg"
import "../styles/BitcoinHome.css"
import Footer from './Footer'


const BitcoinHome = () => {
    return (
        <>
            <div className="row bitcoinhome_row1">



                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div className="home_imgdiv">

                        <img src={blockchainimg} alt="" className='bitcoinimg' />
                    </div>
                </div>



                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">

                    <div className="home_textdiv">
                        <p className='textdiv_welcome'>Get started <br /> with Bitcoins</p>
                        <br />

                        <p className='textdiv_ultimate'>Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network.

                            <br /><br />

                            <p className='textdiv_tryour'>Read and learn more about bitcoins</p>

                            <button className='btn btn-warning currexbtn'>Bitcoins  </button>




                        </p>




                    </div>

                </div>




            </div>




        </>
    )
}

export default BitcoinHome