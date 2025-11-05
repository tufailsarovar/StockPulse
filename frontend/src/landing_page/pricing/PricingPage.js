import React from "react";
import Brokrage from "./Brokrage";
import Equity from "./Equity";
import AccountOpen from "./AccountOpen";
import DemetAccount from "./DemetAccount";
import Services from "./Services";
import Charges from "./Charges";

function PricingPage() {
    return ( 
        <>
          <Brokrage/>
          <Equity/>
          <AccountOpen/>
          <DemetAccount/>
          <Services/>
          <Charges/>
        </>
     );
}

export default PricingPage;