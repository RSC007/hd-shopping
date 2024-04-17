import React, { useEffect } from "react";
import "../../styles/global.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/slice/userSlice";
import { resetCart } from "../../redux/slice/cartReducer";

export default function NavBar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const onVisit = (path = "") => navigate(path);

  const onLogout = () => {
    localStorage.removeItem("user");
    dispatch(resetCart());
    navigate("/app/register");
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <body>
      <div class="top-navbar">
        <p>WELCOME {user ? user?.user : "TO OUR SHOP"}</p>
        <div
          class="icons"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          {user ? (
            <button class="btn btn-primary" onClick={onLogout}>
              {/* <img src="./images/register.png" alt="" width="18px" /> */}
              Logout
            </button>
          ) : (
            <button class="btn btn-primary" onClick={() => onVisit("login")}>
              {/* <img src="./images/register.png" alt="" width="18px" /> */}
              Login
            </button>
          )}
          {!user && (
            <button class="btn btn-primary" onClick={() => onVisit("register")}>
              {/* <img src="./images/register.png" alt="" width="18px" /> */}
              Register
            </button>
          )}
          <button type="button" class="btn btn-primary position-relative">
            <li class="fa-solid fa-cart-shopping"></li>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart?.cartItems?.length}
              {/* <span class="visually-hidden">unread messages</span> */}
            </span>
          </button>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg" id="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="/" id="logo">
            <span id="span1">H</span>D <span>Shopping</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <img src="./images/menu.png" alt="" width="30px" />
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <button
                  onClick={() => onVisit("home")}
                  class="btn btn-primary"
                  aria-current="page"
                  href="index"
                >
                  Home
                </button>
              </li>
              <li class="nav-item">
                <button
                  onClick={() => onVisit("product")}
                  class="btn btn-primary"
                  href="product"
                >
                  Product
                </button>
              </li>
              <li class="nav-item dropdown"></li>
              <li class="nav-item">
                <button
                  onClick={() => onVisit("about")}
                  class="btn btn-primary"
                  href="about"
                >
                  About
                </button>
              </li>
              <li class="nav-item">
                <button
                  onClick={() => onVisit("contact")}
                  class="btn btn-primary"
                  href="contact"
                >
                  Contact
                </button>
              </li>
            </ul>
            <form class="d-flex" id="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>Electronic Shop</h3>
                <p>
                  Karachi <br />
                  sindh <br />
                  Pakistan <br />
                </p>
                <strong>Phone:</strong> +000000000000000 <br />
                <strong>Email:</strong> electronicshop@.com <br />
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Usefull Links</h4>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Terms of sercvice</a>
                  </li>
                  <li>
                    <a href="#">Privacy policey</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>

                <ul>
                  <li>
                    <a href="#">PS 5</a>
                  </li>
                  <li>
                    <a href="#">Computer</a>
                  </li>
                  <li>
                    <a href="#">Gaming Laptop</a>
                  </li>
                  <li>
                    <a href="#">Mobile Phone</a>
                  </li>
                  <li>
                    <a href="#">Gamin Gedget</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quibusdam?\
                </p>

                <div class="socail-links mt-3">
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-skype"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <hr />
      <div class="container py-4">
        <div class="copyright">
          &copy; Coptright{" "}
          <strong>
            <span>Electronic Shopping</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="#">HD coding</a>
        </div>
      </div>
      <a href="#" class="arrow">
        <i>
          <img src="./images/arrow.png" alt="" />
        </i>
      </a>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></script>
    </body>
  );
}
