import React from "react";

export default function Home() {
  return (
    <>
      <section class="home">
        <div class="content">
          <h1>
            <span>Electronic Products</span>
            <br />
            Up to <span id="span2">50%</span> Off
          </h1>
          <p>
            Welcome to hd Electronics Shopping
            <br />
            special offers for online customers
          </p>
          <div class="btn">
            <button>Shop Now</button>
          </div>
        </div>
        <div class="img">
          <img
            src="C:\Users\acer\OneDrive\Documents\Desktop\images\0.jpg"
            alt=""
          />
        </div>
      </section>

      <section class="banner">
        <div class="content">
          <h1>
            <span>Electronic Gadget</span>
            <br />
            Up to <span id="span2">50%</span> Off
          </h1>
          <p>
            Welcome to hd Electronics Shopping
            <br />
            we provide good gadgets and Services
          </p>
          <div class="btn">
            <button>Shop Now</button>
          </div>
        </div>
        <div class="img">
          <img
            src="C:\Users\acer\OneDrive\Documents\Desktop\images\w.jpg"
            height="300px"
          />
        </div>
      </section>

      <div class="container" id="newslater">
        <h3 class="text-center">
          Subscribe To The Electronic Shop For Letest Upload.
        </h3>
        <div class="input text-center">
          <input type="text" placeholder="Enter Your Email.." />
          <button id="subscribe">SUBSCRIBE</button>
        </div>
      </div>
    </>
  );
}
