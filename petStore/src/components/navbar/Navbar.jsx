import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar-main'>
            <div className="navbar-container">
                <nav class="navbar navbar-expand-lg navbar-light">

                    <a class="navbar-brand" href="#">
                        <img className='nav-logo' src="data:image/png;base64,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" width="30" height="30" alt="" />
                    </a>
                    <p> Let's make it</p>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    
                    <div class="nav-links-container collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item login-btn">
                                <a class="nav-link " href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
