import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function OpenAccount() {
    const { user, loginWithRedirect,isLoading, isAuthenticated, logout } = useAuth0();
    if (isLoading) {
    return <div>Loading ...</div>;
  }
    return ( 
         <div className="container p-5 mb-4">
            <div className="row text-center">
                <h1 className='mt-5'>Open a <b style={{color: "rgba(22, 112, 221, 1)"}}>StockPulse</b> account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                 {
                    !isAuthenticated && (
                        <button className='p-2 btn btn-primary fs-5 mb-4' onClick={(e) => loginWithRedirect()} style={{width: "20%", margin: "0 auto"}}>Signup Now</button>
                    )
                }
            </div>
        </div>
     );
}

export default OpenAccount;