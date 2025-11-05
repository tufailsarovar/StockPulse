import React from "react";

function Equity() {
    return ( 
        <div className="container">
            <div className="row text-center">
                <div className="equity text-muted border-bottom mb-4 p-3 d-flex">
                    <h2 style={{color:"#2f72d7ff"}}>Equity</h2>
                     <h2 style={{color:"#2f72d7ff", marginLeft:"75px", marginRight:"75px"}}>Currency</h2>
                      <h2 style={{color:"#2f72d7ff"}}>Commodity</h2>
                </div>
                <div className="header border d-flex p-3 text-muted">
                    <div className="col-2"></div>
                    <div className="col-2" style={{fontSize:"18px"}}><b>Equity delivery</b></div>
                    <div className="col-2" style={{fontSize:"18px"}}><b>Equity intraday</b></div>
                    <div className="col-2" style={{fontSize:"18px"}}><b>F&O - Futures</b></div>
                    <div className="col-2" style={{fontSize:"18px"}}><b>F&O - Options</b></div>
                </div>
                <div className="header border d-flex p-3 text-muted">
                    <div className="col-2" style={{fontSize:"1.2rem"}}><p>Brokerage</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>Zero Brokerage</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>0.03% or Rs. 20/executed <br /> order whichever is lower</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>0.03% or Rs. 20/executed <br /> order whichever is lower</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>Flat Rs. 20 per executed order</p></div>
                </div>
                <div className="header border d-flex p-3 text-muted">
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>STT/CTT</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>0.1% on buy & sell</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>0.025% on the sell side</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>0.02% on the sell side</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><ul><li>0.125% of the intrinsic value on options that are bought and exercised</li><li>0.1% on sell side (on premium)</li></ul></div>
                </div>
                 <div className="header border d-flex p-3 text-muted">
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>Transaction charges</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>NSE: 0.00297% <br /> BSE: 0.00375%</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>NSE: 0.00297% <br /> BSE: 0.00375%</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>NSE: 0.00173% <br /> BSE: 0</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>NSE: 0.03503% (on premium) <br /> BSE: 0.0325% (on premium)</p></div>
                </div>
                <div className="header border d-flex p-3 text-muted">
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>GST</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>18% on (brokerage + SEBI <br /> charges + transaction <br /> charges)</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>18% on (brokerage + SEBI <br /> charges + transaction <br /> charges)</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>18% on (brokerage + SEBI <br /> charges + transaction <br /> charges)</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>18% on (brokerage + SEBI charges <br /> + transaction charges)</p></div>
                </div>
                 <div className="header border d-flex p-3 text-muted">
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>SEBI charges</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>₹10 / crore</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>₹10 / crore</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>₹10 / crore</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>₹10 / crore</p></div>
                </div>
                <div className="header border d-flex p-3 text-muted mb-5">
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>Stamp charges</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>0.015% or ₹1500 / crore <br /> on buy side</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>0.015% or ₹1500 / crore <br /> on buy side</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>0.015% or ₹1500 / crore <br /> on buy side</p></div>
                    <div className="col-2" style={{fontSize:"1.1rem", padding:"8px"}}><p>0.003% or ₹300 / crore on buy side</p></div>
                </div>
                <h2 className="text-muted text-center p-5 mb-5"><a href="/" className="text-decoration-none">Calculate your costs upfront</a> using our brokerage calculator</h2>
            </div>
        </div>
     );
}

export default Equity;