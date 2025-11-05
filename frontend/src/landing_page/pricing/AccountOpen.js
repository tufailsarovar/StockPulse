import React from "react";

function AccountOpen() {
    return ( 
        <div className="container p-5">
            <div className="row text-muted">
                <h2><b>Charges for account opening</b></h2>
                <div className="account border d-flex p-3 mt-3">
                    <div className="col-6 fw-bold"><p style={{fontSize:"1.2rem"}}>Type of account</p></div>
                    <div className="col-6 fw-bold"><p style={{fontSize:"1.2rem"}}>Charges</p></div>
                </div>
                <div className="description border d-flex">
                    <div className="col-6 p-3" style={{lineHeight:"30px", fontSize:"1.2rem"}}>
                    <p>Online account</p>
                    <p>Offline account</p>
                    <p>NRI account (offline only)</p>
                    <p>Partnership, LLP, HUF, or Corporate accounts (offline only)</p>
                </div>
                <div className="col-6 p-3">
                    <p>
                        <button className="btn btn-success fw-bold px-4 py-1" style={{ borderRadius: "4px" }}>FREE</button>
                    </p>
                    <p>
                        <button className="btn btn-success fw-bold px-4 py-1" style={{ borderRadius: "4px" }}>FREE</button>
                    </p>
                    <p>	₹ 500</p>
                    <p>	₹ 500</p>
                </div>
                </div>
            </div>
        </div>
     );
}

export default AccountOpen;