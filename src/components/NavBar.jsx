import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg volunteer-navbar">
            <div className="container">

                <Link
                    className="navbar-brand volunteer-brand"
                    to="/"
                >
                    NSS VOLUNTEER
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#volunteerNavbar"
                    aria-controls="volunteerNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="volunteerNavbar"
                >
                    <div className="navbar-nav ms-auto gap-lg-3">

                        <Link
                            className="nav-link volunteer-nav-link"
                            to="/add-volunteer"
                        >
                            Add Volunteer
                        </Link>

                        <Link
                            className="nav-link volunteer-nav-link"
                            to="/view-volunteer"
                        >
                            View Volunteer
                        </Link>

                    </div>
                </div>

            </div>
        </nav>
    )
}

export default NavBar