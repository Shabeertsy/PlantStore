import React from 'react'
import { instance } from '../../Axios'
import './Home.css'
import Navbar from '../navbar/Navbar'

export default function Home() {
    return (
        <>
            <div className="home-main">
                <Navbar/>
                <div className="home-container bg-light">
                    <div className="slider-container ">
                        {/* <MyCarousel className='' /> */}
                    </div>
                    <div className="row ">
                        <div className="col-lg-6">
                            <div className="hero-text">
                                <h1 className='hero-h1'>Make it,</h1>
                                <h1 className='hero-h2 mt-1'>Grow it, Explore it</h1>
                                <div className="mt-3 hero-dis">
                                    Pet Hotel, Pet Grooming & Pet Shop
                                    WordPress Theme
                                </div>
                                <div className=" hero-link-right">
                                            24/7 TOP RATED SUPPORT
                                        </div>
                                <div className="mt-3 hero-icons ">
                                    <button className='btn btn-dark'>Shop Here</button>
                                    <div className="hero-link">
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src=" " alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
