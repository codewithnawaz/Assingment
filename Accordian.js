import React from 'react'

export default function Corousel() {
        return (
               
                                <div className="wrapper">
                                        <ul className="Column">
                                                <li className="Column-item">
                                                        <img className="Column-item-cover" src="./images/Strength.jpg" />
                                                        <div className="Column-item-contents">
                                                                <h2>STRENGHT</h2>

                                                        </div>
                                                </li>
                                                <li className="Column-item">
                                                        <img className="Column-item-cover" src="./images/mobility.jpg" />
                                                        <div className="Column-item-contents">
                                                                <h2>MOBILITY</h2>

                                                        </div>
                                                </li>
                                                <li className="Column-item ">
                                                        <img className="Column-item-cover" src="./images/drill.jpg" />
                                                        <div className="Column-item-contents">
                                                                <h2>DRILLS</h2>
                                                        </div>
                                                </li>
                                        </ul>
                                </div>
             
        )

}


