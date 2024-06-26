import React from "react";

export default function Contact() {
  return (
    <>
      <div class="container" id="contact">
        <div
          class="row"
          style={{
            marginTop: "50px",
          }}
        >
          <div class="col-md-4 py-3 py-md-0">
            <div class="card">
              <i class="fas fa-phone"> phone</i>
              <h6>+0000000000000000000</h6>
            </div>
          </div>
          <div class="col-md-4 py-3 py-md-0">
            <div class="card">
              <i class="fas fa-envelope"> Email</i>
              <h6>example@gmail.com</h6>
            </div>
          </div>
          <div class="col-md-4 py-3 py-md-0">
            <div class="card">
              <i class="fas fa-location-dot"> Address</i>
              <h6>Karachi Sindh Pakistan</h6>
            </div>
          </div>
        </div>
        <div
          class="row"
          style={{
            marginTop: "30px",
          }}
        >
          <div class="col-md-4 py-3 py-md-0">
            <input
              type="text"
              class="form-control form-control"
              placeholder="Name"
            />
          </div>
          <div class="col-md-4 py-3 py-md-0">
            <input
              type="text"
              class="form-control form-control"
              placeholder="Email"
            />
          </div>
          <div class="col-md-4 py-3 py-md-0">
            <input
              type="text"
              class="form-control form-control"
              placeholder="Phone"
            />
          </div>
          <div
            class="form-group"
            style={{
              marginTop: "30px",
            }}
          >
            <textarea
              class="form-control"
              id=""
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>
          <div class="messagebtn text-center">
            <button>Message</button>
          </div>
        </div>
      </div>
    </>
  );
}
