import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import logo from "../../assets/images/7-bg.png";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { scrollToTop } from "../../utils/ScrolltoTop";

export default function Footer() {
  return (
    <div className="footer">

      <div className="mid">
        <img src={logo} alt="rr logo" className="logo-f"/>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                onClick={scrollToTop}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={scrollToTop}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                onClick={scrollToTop}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={scrollToTop}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ct-info">
          <div className="ct-info-align">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <a href="tel:5551234567" className="ct-l">
              555-123-4567
            </a>
          </div>
          <br />
          <div className="ct-info-align">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <a className="ct-l" href="mailto:info@reelrevival.com">
              info@reelrevival.com
            </a>
          </div>
        </div>
      </div>

      <div className="bottom">
        <p>© 2025 All rights reserved.</p>
        <p>
          Website designed & built by{" "}
          <a
            className="link"
            href="https://ac-innovations.io"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="AC Innovations Link"
          >
            AC Innovations
          </a>{" "}
          - Your Tech Partner
        </p>
      </div>
    </div>
  );
}