import React from 'react';

function Education() {
    return ( 
        <div className="container mb-3">
            <div className="row">
                <div className="col-6">
                    <img src="media/Images/education.svg" alt="Education-Image" />
                </div>
                <div className="col-6">
                    <h2 className='mb-4 '>Free and open market education</h2>
                    <p className='mb-4'>Varsity, the largest online stock market education book in the world covering <br /> everything from the basics to advanced trading.</p>
                    <a href="/" className='text-decoration-none'>Versity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mb-3 mt-5'>TradingQ&A, the most active trading and investment community in India <br />for all your market related queries.</p>
                    <a href="/" className='text-decoration-none mb-3'>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>

                </div>
            </div>
        </div>
     );
}

export default Education;