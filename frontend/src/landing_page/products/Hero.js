import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            <div className="row text-muted text-center p-5 mt-5 mb-5">
                <h1>StockPulse Products</h1>
                <h4 className='lh-lg'>Sleek, modern, and intuitive trading platforms</h4>
                <h6>Check out our <a href="/" className='text-decoration-none'>investment offerings <i class="fa-solid fa-arrow-right"></i></a></h6>
            </div>
        </div>
     );
}

export default Hero;