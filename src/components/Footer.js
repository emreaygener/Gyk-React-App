import "../styles/Footer.css";
import logo from "../assets/img/logogreennobgcrop.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const Address = "40.985303241400565, 29.047830451305526";
  return (
    <footer>
      <picture>
        <img src={logo} alt="logo" width={140} height={270} />
      </picture>
      <section className="footer-content">
        <div className="footer-text">
          <Link to="/contact">
            <h3 id="contactus-footer">Contact Us</h3>
          </Link>

          <a
            id="address-long"
            href={`https://www.google.com/maps/search/?api=1&query=${Address}`}
            target="_blank"
            rel="noreferrer"
          >
            <h4>
              Faikbey Apt, Yazıcıbaşı Mah. Lale Sk, Kuyubaşı Sk. NO: 2, 34724
              Kadıköy/İstanbul
            </h4>
          </a>

          <a
            id="address-short"
            href={`https://www.google.com/maps/search/?api=1&query=${Address}`}
            target="_blank"
            rel="noreferrer"
          >
            <h4>Adress</h4>
          </a>

          <a href="tel:+905364001010">
            <h4>Phone</h4>
          </a>

          <a href="mailto:user@test.com">
            <h4>Mail</h4>
          </a>
        </div>

        <div className="footer-map">
          <h3 id="our-location-tag">Our Location</h3>
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3011.8254336035066!2d29.047830500000003!3d40.9853032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDU5JzA3LjEiTiAyOcKwMDInNTIuMiJF!5e0!3m2!1str!2str!4v1722012689296!5m2!1str!2str"
            width="300"
            height="200"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>&copy; GYK Hukuk 2024</p>
        </div>
      </section>
    </footer>
  );
}
