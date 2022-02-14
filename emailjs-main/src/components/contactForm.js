import emailjs from "emailjs-com";
import React from "react";
import Swal from 'sweetalert2'
// $ npm install --save sweetalert2

export default function ContactUs() {
  //npm i emailjs-com --save

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z4vtd9x",
        "template_mwgecia",
        e.target,
        "user_fQb3i8JPz4EMCANJWG9oG"
      )
      .then(
        result => {
          console.log("result" + result.text);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your mail has arrived.',
            showConfirmButton: false,
            timer: 1500
          }) },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="container">
      <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              className="form-control"
              id=""
              cols="30"
              rows="8"
              placeholder="Your message"
              name="message"
            ></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <input
              type="submit"
              className="btn btn-info"
              value="Send Message"
            ></input>
          </div>
        </div>
      </form>
      <button
        id="btn"
        onClick={() => (window.location = "mailto:B.Lantsoght@gmail.com")}
      >
        Mail Me
      </button>
    </div>
  );
}
