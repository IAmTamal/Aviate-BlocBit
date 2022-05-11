import React from 'react'
import Navbar from "./Navbar"
import "../styles/HomeContainer.css"
import blockchainimg from "../assets/bit1.svg"
import bitcoinimg from "../assets/bitcoin.svg"
import "../styles/BitcoinHome.css"
import Footer from './Footer'
import { Link } from 'react-router-dom'


const BitcoinHome = () => {
    return (
        <>
            <div className="row bitcoinhome_row1">



                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div className="bitbloc_imgdiv">

                        <img src={bitcoinimg} alt="" className='bitcoinimg' />
                    </div>
                </div>



                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">

                    <div className="home_textdiv">
                        <p className='textdiv_welcome'>Get started <br /> with Bitcoins</p>
                        {window.innerWidth > 431 && <br />}

                        {window.innerWidth < 431 &&
                            <div className='blockchain_img_mobdiv'>
                                <img src={blockchainimg} alt="" className='blockchain_img_mob' />
                            </div>
                        }

                        <p className='textdiv_ultimate'>Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network.

                            <br /><br />

                            <p className='textdiv_tryour'>Read and learn more about bitcoins</p>



                            <Link to={"/bitcoin-info"}>

                                <button className='btn btn-warning currexbtn'>Bitcoins  </button>

                            </Link>


                        </p>




                    </div>

                </div>




            </div>




        </>
    )
}

export default BitcoinHome