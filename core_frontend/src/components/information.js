import React from "react";
import Info from "./info.jpg";
import Loyalty from "./pimg.jpg";
import AD from "./ad2.jpg";
import AD2 from "./ad3.jpg";
import AD3 from "./tech.jpg";

function Information() {
	return (
		<div className="information">
			<div className="info_container"></div>

            <img src={Loyalty} className="pimg"/>
			<div className="loyalty_program_info">
				<link href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap" rel="stylesheet"/>
				<a href="#" data-text="Loyalty program!">
					Loyalty program
				</a>
				<link href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap" rel="stylesheet"/>
				<p className='text'>Loyalty has its rewards and we definitely show that. Current lessees can save up to $850 when you lease or buy another vehicle and save you a whole lotta peace of mind.
				 Unlike other dealerships we are here for you. The longer you stay the more we benefit you!</p>
            </div>
            <img src={AD2} className="ad3"/>
            <div className="auto_program_info">

            <a2 href="#" data-text2="Auto Services">Auto Services</a2>
             <p className="auto-header">Schedule an appointment below or call to see how your local Exclusive Auto Sales
             can help ensure your vehicle continues running strong that way you pick up where you left off in life and hit the road again with confidence .</p>

            </div>
		</div>
	);
}

export default Information;
