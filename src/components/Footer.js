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
            <h3>Contact Us</h3>
          </Link>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${Address}`}
            target="_blank"
            rel="noreferrer"
          >
            <h3>
              FAİKBEY APT, YAZICIBAŞI MAH. LALE SOK, Kuyubaşı Sk. NO: 2, 34724
              Kadıköy/İstanbul
            </h3>
          </a>

          <a href="tel:+905364001010">
            <h3>Phone</h3>
          </a>

          <a href="mailto:user@test.com">
            <h3>Mail</h3>
          </a>
        </div>

        <div className="footer-map">
          <h3>Our Location</h3>
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3011.8254336035066!2d29.047830500000003!3d40.9853032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDU5JzA3LjEiTiAyOcKwMDInNTIuMiJF!5e0!3m2!1str!2str!4v1722012689296!5m2!1str!2str"
            width="300"
            height="200"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>&copy; 2021 My First React App</p>
        </div>
      </section>
    </footer>
  );
}
