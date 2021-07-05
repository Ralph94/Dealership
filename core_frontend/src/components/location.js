
import React from 'react';


function Location() {



  return (
      <div className="containerL">
      <link href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap" rel="stylesheet"/>
      <div className="location">
      <h1>We Deliver What We Promise Come And Stop By!</h1>

      <div className="center">
      <a href="#popup">Click For Address</a>
      <div id="popup">
      <div className="popup-content">
      <h2>Come visit us today!</h2>
      <p>940 S Virginia St, Reno, NV 89502</p>
      <a href="#" className="close-popup">&times;</a>
      </div>
      </div>
      </div>




      <p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.948936010898!2d-119.80993488487321!3d39.51564217948011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809940b90dda546d%3A0x9b3e75180cf8a4a8!2sExclusive%20Auto%20Sales!5e0!3m2!1sen!2sus!4v1608524646608!5m2!1sen!2sus"
       width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </p>


      </div>
      </div>



  );
}

export default Location;