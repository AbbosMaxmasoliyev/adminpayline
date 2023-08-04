import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.scss"
import * as Feather from 'react-icons/fi';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample09">
                <ul className="navbarCustom navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "button btn btn-outline-primary" : isActive ? "button btn btn-primary" : "button btn btn-outline-primary"
                            }
                        >
                            <Feather.FiGlobe  size={25}/>
                            <span>Country</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/user"
                            className={({ isActive, isPending }) =>
                                isPending ? "button btn btn-outline-primary" : isActive ? "button btn btn-primary" : "button btn btn-outline-primary"
                            }
                        >
                            <Feather.FiUsers width={25}/>
                            <span>User</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/role"
                            className={({ isActive, isPending }) =>
                                isPending ? "button btn btn-outline-primary" : isActive ? "button btn btn-primary" : "button btn btn-outline-primary"
                            }
                        >
                            <Feather.FiAlignCenter width={25}/>
                            <span>Role</span>
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar