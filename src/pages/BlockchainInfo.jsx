import React from 'react'
import HomeParticles from '../components/HomeParticles'
import Navbar from '../components/Navbar'
import "../styles/BlockchainInfo.css"
import gs from "../assets/getstarted.svg"
import BlockchainDetails from '../components/BlockchainDetails'

const BlockchainInfo = () => {
    return (
        <>

            <div className="blockpage_parent">

                <HomeParticles />

                <div className="container">
                    <Navbar />


                    <div className="row blockchaininfo_row1">



                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 blockchaininfo_col1">

                            <div className="blockchaininfo_textdiv">
                                <p className='textdiv_welcome'>Get started <br /> with Blockchain</p>
                                {window.innerWidth > 431 && <br />}

                                {window.innerWidth < 431 &&
                                    <div className='blockchain_img_mobdiv'>
                                        <img src={gs} alt="" className='blockchain_img_mob' />
                                    </div>
                                }

                                <p className='textdiv_ultimate'>
                                    Hello there, take a look at all the stuffs below, go from top to bottom and you will get a good idea of what blockchain is all about. <br /><br />

                                    These documents are originally created by the BlockChain Foundation and are available on the BlockChain Wiki, Medium. <br /><br />

                                </p>




                            </div>

                        </div>



                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                            <div className="blockchaininfo_imgdiv">

                                <img src={gs} alt="" className='bitcoinimg' />
                            </div>
                        </div>




                    </div>


                    <BlockchainDetails />
                </div>

            </div>

        </>
    )
}

export default BlockchainInfo