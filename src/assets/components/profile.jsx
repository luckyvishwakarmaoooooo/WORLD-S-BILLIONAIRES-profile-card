import React from 'react';

// IMPORT useNavigate
import { useNavigate } from 'react-router-dom';

import Hamburger from '../hamburger.svg?react';
import ProfilePic from '../components/Mark-Zuckerberg.webp';
import Search from '../search.svg?react';

const Profile = () => {

    // useNavigate lets us change pages
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="profile-wrapper">
                <div className="top-wrapper">
                    <div className="hamburger-menu">
                        <Hamburger className="hamburger-icon" />
                    </div>

                    <div className="title">
                        <h3>WORLD'S BILLIONAIRES</h3>
                    </div>

                    <div className="search-icon">
                        <Search className="search-icon" />
                    </div>
                </div>

                <div className="center-wrapper">

                    <div className="profile-info">
                        <h2 className="name">Mark Zuckerberg</h2>
                        <p className="designation">Co-founder & CEO</p>

                        <div className="stats">
                            <div className="stat-item">
                                <div className="number">$100B</div>
                                <div className="label">Net Worth</div>
                            </div>
                            <div className="stat-item">
                                <div className="number">42</div>
                                <div className="label">Age</div>
                            </div>
                            <div className="stat-item">
                                <div className="number">5</div>
                                <div className="label">Rank</div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-pic">
                        <img src={ProfilePic} alt="Profile" />
                    </div>
                </div>

                <div className="button-wrapper">
                    {/* NAVIGATE TO DETAILS PAGE */}
                    <button
                        className="action-btn"
                        onClick={() => navigate("/details")}
                    >
                        MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
