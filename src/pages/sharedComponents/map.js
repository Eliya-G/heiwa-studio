import React from "react";

export function Map() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.642800020401!2d-79.38203572313645!3d43.613978471103984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cab33b1101af%3A0x918c2ae0aed735a!2s441%20Lakeshore%20Ave%2C%20Toronto%2C%20ON%20M5J%201X9!5e0!3m2!1sen!2sca!4v1746813914789!5m2!1sen!2sca"
        title='Google Maps'
        width="1280"
        height="720"
        style={{border:"0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
