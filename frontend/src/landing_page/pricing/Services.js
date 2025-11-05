import React from "react";

function Services() {
    return ( 
        <div className="container p-5">
            <div className="row text-muted">
                <h2><b>Charges for optional value added services</b></h2>
                <div className="account border d-flex p-3 mt-3">
                    <div className="col-4 fw-bold"><p style={{fontSize:"1.2rem"}}>Service</p></div>
                    <div className="col-4 fw-bold"><p style={{fontSize:"1.2rem"}}>Billing Frquency</p></div>
                    <div className="col-4 fw-bold"><p style={{fontSize:"1.2rem"}}>Charges</p></div>
                </div>
                <div className="description border d-flex">
                    <div className="col-4 p-2" style={{lineHeight:"30px", fontSize:"1.2rem"}}>
                    <p>Tickertape</p>
                    <p>Smallcase</p>
                    <p>Pulse Connect</p>
                </div>
                <div className="col-4 p-2">
                    <p>Monthly / Annual</p>
                    <p>Per transaction</p>
                    <p>Monthly</p>
                </div>
                 <div className="col-4 p-2" style={{lineHeight:"30px", fontSize:"1.2rem"}}>
                    <p>Free: 0 | Pro: 249/2399</p>
                    <p>	Buy & Invest More: 100 | SIP: 10</p>
                    <p>Connect: 500 | Personal: Free</p>
                </div>
                </div>
            </div>
        </div>
     );
}

export default Services;