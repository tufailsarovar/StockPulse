import React from 'react';

function Stats() {
    return ( 
    <div className="container p-3 mb-5">
        <div className="row">
            <div className="col-6 p-4">
                <h2 className='mb-4'>Trust with confidence</h2>
                <h3>Customer-first always</h3>
                <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores worth of equity investments.</p>
                <h3>No spam or gimmicks</h3>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                <h2>The <b style={{color: "rgba(22, 112, 221, 1)"}}>StockPulse</b> universe</h2>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <h3>Do better with money</h3>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className="col-6 p-4">
                <img src="media/Images/ecosystem.png" alt="Ecosystem-Image" style={{width: "95%"}} />
                <div className='text-center'>
                    <a href="/" className='mx-5 text-decoration-none'>Explore our products  <i class="fa-solid fa-arrow-right"></i></a>
                    <a href="/" className='text-decoration-none'>Try <b>Pulse</b> demo <i class="fa-solid fa-arrow-right"></i></a>
                </div>

            </div>
        </div>
    </div>
 );
}

export default Stats;