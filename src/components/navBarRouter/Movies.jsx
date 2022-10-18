import React from 'react';

const Movies = () => {
    return (
        <div>
            <header id='root'>
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <a href="/#" className="nav-link px-2 text-secondary">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/series" className="nav-link px-2 text-white">
                                    Series
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </header>

        </div>


    );
};

export default Movies;