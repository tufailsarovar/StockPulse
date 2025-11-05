import React from "react";
import SearchBtn from "./SearchBtn";
import Description from "./Description";

function SupportPage() {
  return (
    <>
      <SearchBtn></SearchBtn>
      <Description
        Header="Account Opening"
        D1="Resident individual"
        D2="Minor"
        D3="Non Resident Indian (NRI)"
        D4="Company, Partnership, HUF and LLP"
        D5="Glossary"
      ></Description>
      <Description
        Header="Your StockPulse Account"
        D1="Your Profile"
        D2="Account modification"
        D3="Client Master Report (CMR) and Depository Participant (DP)"
        D4="Nomination"
        D5="Transfer and conversion of securities"
      ></Description>
      <Description
        Header="Pulse"
        D1="IPO"
        D2="Trading FAQs"
        D3="Margin Trading Facility (MTF) and Margins"
        D4="Alerts and Nudges"
        D5="General"
      ></Description>
      <Description
        Header="Funds"
        D1="Add money"
        D2="Withdraw money"
        D3="Add bank accounts"
        D4="eMandates"
        D5="Unrealized P&L"
      ></Description>
      <Description
        Header="Console"
        D1="Portfolio"
        D2="Corporate actions"
        D3="Funds statement"
        D4="Reports"
        D5="Profile"
      ></Description>
      <Description
        Header="Coin"
        D1="Mutual funds"
        D2="National Pension Scheme (NPS)"
        D3="Fixed Deposit (FD)"
        D4="Features on Coin"
        D5="Payments and Orders"
      ></Description>
    </>
  );
}

export default SupportPage;
