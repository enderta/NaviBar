import React from 'react';

const NaviBar = () => {
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                    >
                        <svg
                            className="bi me-2"
                            width={40}
                            height={32}
                            role="img"
                            aria-label="Bootstrap"
                        >
                            <use xlinkHref="#bootstrap" />
                        </svg>
                    </a>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <a href="/#" className="nav-link px-2 text-secondary">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="nav-link px-2 text-white">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/series" className="nav-link px-2 text-white">
                                Series
                            </a>
                        </li>
                        <li>
                            <a href="/series/:id" className="nav-link px-2 text-white">
                                Seasons
                            </a>
                        </li>
                        <li>
                            <a href="/movies" className="nav-link px-2 text-white">
                                Movies
                            </a>
                        </li>
                    </ul>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input
                            type="search"
                            className="form-control form-control-dark text-bg-dark"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                    </form>

                </div>
            </div>
        </header>
    );
};

export default NaviBar;