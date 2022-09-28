import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-4">
                        <img src="./images/webcam.svg" />
                            <a className="nav-link" aria-current="page" href="#">Live</a>
                            
                        </li>
                        <li className="nav-item mx-4">
                        <img src="./images/clipboard2-check.svg" className="mx-auto"/>
                            <a className="nav-link" href="#">Membership</a>
                           
                        </li>
                        <li className="nav-item mx-4">
                        <img src="./images/graph-up-arrow.svg" />
                            <a className="nav-link" href="#">Plan</a>
                            
                        </li>
                        <li className="nav-item mx-4">
                        <img src="./images/grid.svg" />
                            <a className="nav-link" href="#">More</a>
                            
                        </li>
                    </ul>
                    <ul className="nav-item mx-3 ">
                    <img src="./images/person-fill.svg" />
                        <a className="nav-link" href="#">log In</a>
                       
                    </ul>

                </div>
            </div>
        </nav>
    )
}
