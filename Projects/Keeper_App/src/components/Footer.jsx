import React from "react";

var date = new Date();
var year= date.getFullYear();

function Footer() {
  return (
    <div >
      <footer> <p>  Copyright  {year} </p> </footer>
    </div>
  );
}

export default Footer;
