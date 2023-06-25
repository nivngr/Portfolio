import React from "react"
import nivImage from '../assets/Niv-image-no-bg.png'
import './styles/Header.css'

export default function Header() {
    return (
        <header className="header">
            <h2 className='header-title'>Niv Nagar</h2>
            <img src={nivImage} className="image" alt="Vite logo" />
            <div className="header-right-section">
                <a href="#" class="fa fa-github"></a>
                <a href="#" class="fa fa-linkedin"></a>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
            </div>
        </header>
    )
}