import React from 'react'
import "../styles/HomeContainer.css"
import blockchainimg from "../assets/bit1.svg"
import "../styles/BitcoinHome.css"
import blockchainhomeimg from "../assets/blockchainhome.png"
import "../styles/BlockchainHome.css"

const BlockchainHome = () => {
    return (
        <>
            <div className="row blockchainhome_row1">


                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">

                    <div className="home_textdiv">
                        <p className='textdiv_welcome'>Deep dive <br /> into Blockchain</p>
                        {window.innerWidth > 431 && <br />}

                        {window.innerWidth < 431 &&
                            <div className='blockchain_img_mobdiv'>
                                <img src={blockchainhomeimg} alt="" className='blockchain_img_mob' />
                            </div>
                        }

                        <p className='textdiv_ultimate'>A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format.

                            <br /><br />

                            <p className='textdiv_tryour'>Read and learn more about blockchain</p>

                            <button className='btn btn-warning currexbtn'>Blockchain  </button>

                        </p>

                    </div>

                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div className="blockchainhome_imgdiv">

                        <img src={blockchainhomeimg} alt="" className='blockchain_image' />
                    </div>
                </div>


            </div>

        </>
    )
}

export default BlockchainHome