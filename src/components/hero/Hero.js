import "./Hero.css";
import logo from "../../assets/img/logogoldnobgcrop.png";

export default function Hero() {
  return (
    <section className="hero">
      <article className="hero-text">
        <h1>{`GYK Hukuk Sizlerle`}</h1>
        <h2>Sizlerleyiz gerçekten</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo
          euismod, cursus libero nec, tincidunt nunc. Nullam euismod, odio nec
          bibendum varius, urna nunc ultrices justo, vel tincidunt metus libero
          vel nunc.
        </p>
      </article>

      <img src={logo} loading="lazy" alt="" width={310} height={596}></img>
    </section>
  );
}
