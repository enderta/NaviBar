import React from 'react';

const HomeNavi = () => {
    return (
        <div>
            <div>
                <video autoPlay loop muted>
                    <source
                        src={require('./pexels-gamol-10532470.mp4')}
                        type="video/mp4"
                    />

                </video>
                <button className='home_btn'>
                    <a className='home_link' href="/series" style={{"color":"green","textDecoration":"none"}}>
                        <h1 className="link_text" >Login</h1></a>
                </button>

            </div>
        </div>
    );
};

export default HomeNavi;