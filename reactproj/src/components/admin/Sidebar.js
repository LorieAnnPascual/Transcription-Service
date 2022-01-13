import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="col-md-4 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#e9ecef" }}>
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li className="nav-item mb-2 mt-1">
                    <Link className="nav-link text-secondary" to="/admin">
                        <h5>Musika Dashboard</h5>
                    </Link>
                </li>
                {/* <li className="nav-item mb-2 "><a className="nav-link text-secondary" href="#"><i className="fas fa-user font-weight-bold"></i> <span className="ml-3">Overview</span></a></li> */}
                <li className="nav-item mb-2">
                    <a className="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i className="far fa-file-word font-weight-bold"></i> <span className="ml-3">

                        <NavLink
                            className="nav-link"
                            to="/addProduct"
                        //  className={classes.link}
                        >
                            Add Transcription
                        </NavLink>


                    </span></a>
                    {/* <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                        <li className="nav-item mb-2 "><a className="nav-link text-secondary" href=""><i className="fas fa-book-reader"></i> Data Report </a></li>
                        <li className="nav-item mb-2 "><a className="nav-link text-secondary" href=""> <i className="fas fa-book-medical"></i> File Report </a></li>
                    </ul> */}
                </li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">
                    <NavLink
                        className="nav-link"
                        to="/account"
                    //  className={classes.link}
                    >
                        Manage Account
                    </NavLink>
                </span></a></li>

            </ul>
        </div>
    )
}

export default Sidebar