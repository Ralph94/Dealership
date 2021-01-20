import React from 'react';
import Info from './info.jpg'
import Loyalty from './pimg.jpg'
import AD from './ad2.jpg'
import AD2 from './ad3.jpg'
import AD3 from './tech.jpg'



function Information() {
  return (
  <div className="information">
  <div className="row1 col4 cspan12">
  <h1>Information page!</h1>
   <h2>Services we offer!</h2>
  </div>
    <div className="row2 col1 cspan6">

      <link href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap" rel="stylesheet"/>
      <a2 href="#" data-text="Loyalty program!">Loyalty program</a2>
      </div>

      <div className="row3 col1 cspan6">
      <link href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap" rel="stylesheet"/>
      <h3> Loyalty has its rewards. Current lessees can save up to $850 when you lease or buy another vehicale and save you a whole lotta peace of mind.</h3>

      <img src={Loyalty} className="pimg"/>
      <img src={AD} className="ad2"/>

      <p> At the end of your Toyota or Scion lease, you can save up to $850 when you lease or buy a new Toyota through Southeast Toyota Finance. It's our way of saying thank you. Plus, when you combine the loyalty savings with our low payments, you could possibly drive a new Toyota for less than you're paying now.
     _______________________________________________________________________________
LOYALTY CASH OFFER can be combined with cash back, special APR or lease programs and certain other offers. The offer is not transferable in any way. Offer entitles lease customer to $500 Loyalty Cash on the retail purchase or lease of any new Toyota vehicle through Southeast Toyota Finance and retailed and delivered within 30 days of lease maturity date. Loyalty cash must be used toward down payment/capitalized cost reduction and included in the buyer's
order and/or contract. Offer valid only at participating Southeast Toyota Finance dealers in AL, FL, GA, NC or SC. Dealers must allow 6-8 weeks for processing. Incomplete or missing information will delay processing. Limit one per customer. $350 disposition fee waiver offer is applicable to current Southeast Toyota Finance lessees who turn in the leased vehicle and, within 30 days, finance or lease a new Toyota through Southeast Toyota Finance. $350 will be applied as a credit or issued as a rebate based on timing of the new finance or lease account and upon final resolution of prior lease account. New vehicle must be in the name of the original lessee or co-lessee.</p><link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed&display=swap" rel="stylesheet"/>
   </div>



   <div className="row2 col7 cspan6">
     <a3 href="#" data-text2="Auto Services">Auto Services</a3>
  </div>

   <div className="row2 col13 cspan6">
     <a4 href="#" data-text2="24Hr Customer Support">24Hr Customer Support</a4>
  </div>

   <div className="row3 col7 cspan6">
   <h3>Schedule an appointment below or call to see how your local Exclusive Auto Sales
   can help ensure your vehicle continues running strong that way you pick up where you left off in life and hit the road again with confidence .</h3>
   <img src={AD2} className="ad3"/>
     <label for="information"></label>
     <input type="text" id="information" name="information" placeholder="Schedule Appoiment Here!"/>
     <h5>Why You Should Go to Your Exclusive Auto Sales for Service and Repairs</h5>
     <p2>Today’s vehicles and their maintenance needs aren’t as basic as they once were. It has never been more important to ensure your technician is familiar with your car, truck or SUV’s maintenance needs.
        There are over 40,000 factory-trained and Quick Lane technicians across America ready to service your car, truck or SUV. Their training has been developed by the same company
         that designed, engineered and built your vehicle. This means they have the knowledge, original equipment manufacturer (OEM) parts,
         tools and training to help ensure your service is done correctly the first time.</p2>
   </div>


   <div className="row3 col19 cspan6">
   <h4>We are here for you at whatever time!</h4>
   <img src={AD3} className="ad4"/>
   <h5>AVAILABLE 24/7</h5>


   </div>
    </div>






  );
  }


export default Information;
