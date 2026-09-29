import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <img src="/meetly.png" alt="Meetly" />
                </div>
                <div className="navlist">
                        <button
                            className="navButton guestButton"
                            onClick={() => router("/aljk23")}
                        >
                            Join as Guest
                        </button>

                        <button
                            className="navButton registerButton"
                            onClick={() => router("/auth")}
                        >
                            Register
                        </button>

                        <button
                            className="navButton loginButton"
                            onClick={() => router("/auth")}
                        >
                            Login
                        </button>
                    </div>

            </nav>


            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>

                    <p>Cover a distance by Meetly - Connect Without Limits</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>

                    <img src="/mobile.png" alt="" />

                </div>
            </div>



        </div>
    )
}