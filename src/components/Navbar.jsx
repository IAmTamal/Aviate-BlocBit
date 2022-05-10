import React from 'react'
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link to={"/"} className="navbarlinks nb">BlocBit</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <Link to={"/"} className="navbarlinks">
                                <li className="nav-item ">
                                    <p>Home</p>
                                </li>
                            </Link>

                            <Link to={"/exchange"} className="navbarlinks">
                                <li className="nav-item ">
                                    <p>Exchange</p>
                                </li>
                            </Link>

                            <Link to={"/about"} className="navbarlinks">
                                <li className="nav-item ">
                                    <p>About</p>
                                </li>
                            </Link>

                            <Link to={"/about"} className="navbarlinks">
                                <li className="nav-item ">
                                    <p>Login</p>
                                </li>
                            </Link>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar