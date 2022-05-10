import React from 'react'
import Navbar from "./Navbar"
import "../styles/HomeContainer.css"
import blockchainimg from "../assets/blocks1.svg"
import "../styles/BitcoinHome.css"


const BitcoinHome = () => {
    return (
        <>
            <div className="row bitcoinhome_row1">



                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div className="home_imgdiv">

                        <img src={blockchainimg} alt="" className='blockchain_img' />
                    </div>
                </div>



                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">

                    <div className="home_textdiv">
                        <p className='textdiv_welcome'>Get started <br /> with Bitcoins</p>


                        <p className='textdiv_ultimate'>Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network.

                            <br /><br />

                            Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and everyone can take part.

                            <br /> <br />

                            Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system.


                        </p>




                    </div>

                </div>




            </div>

        </>
    )
}

export default BitcoinHome