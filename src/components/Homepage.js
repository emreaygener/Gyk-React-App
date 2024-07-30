import Clipboard from "./clipboard/Clipboard";
import Hero from "./hero/Hero";
import Slider from "./slider/Slider";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Slider />
      <Clipboard />
    </>
  );
}
