import React from "react";
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";
import "./Contact.css";

export default function Contact() {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <form
        id="form"
        className="text-center"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2>Contact Me</h2>

        <MDBInput placeholder="Your Name" v-model="name" wrapperClass="mb-4" />

        <MDBInput
          type="email"
          v-model="email"
          wrapperClass="mb-4"
          placeholder="Your Email address"
        />

        <MDBInput placeholder="Subject" v-model="subject" wrapperClass="mb-4" />

        <MDBTextArea wrapperClass="mb-4" placeholder="Message" />
        <div className="d-flex justify-content-center align-items-center">
          <MDBCheckbox
            wrapperClass="d-flex justify-content-around col-4"
            label="Send me copy"
          />
        </div>
        <MDBBtn block className="my-4 bg-primary" style={{ width: "19rem" }}>
          Send
        </MDBBtn>
      </form>
    </div>
  );
}
