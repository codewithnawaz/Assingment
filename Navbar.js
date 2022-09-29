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
                        <li className="nav-item mx-3">
                        <img src="./images/webcam.svg" className='mx-1'/>
                            <a className="nav-link" aria-current="page" href="#">LIVE</a>
                            
                        </li>
                        <li className="nav-item mx-3">
                        <img src="./images/clipboard2-check.svg" className='mx-4'/>
                            <a className="nav-link" href="#">MEMBERSHIPS</a>
                           
                        </li>
                        <li className="nav-item mx-3">
                        <img src="./images/graph-up-arrow.svg" className='mx-2'/>
                            <a className="nav-link" href="#">PLANS</a>
                            
                        </li>
                        <li className="nav-item mx-3">
                        <img src="./images/grid.svg" className='mx-2'/>
                            <a className="nav-link" href="#">MORE</a>
                            
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
