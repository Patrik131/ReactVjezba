import React from 'react'
import '../App.css'
import email from "../assets/mail.png"
import bla from "../assets/bla.png"

export default function Gumbovi() {
    return (
        <div className="btn-container">
            <div className="email">
                <img src={email} alt="email" />
                <p>email</p>
            </div>
            <div className="bla">
                <img src={bla} alt="bla" />
                <p>bla</p>
            </div>
        </div>
    )
}