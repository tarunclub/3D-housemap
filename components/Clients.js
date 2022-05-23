import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import ClientInfo from "./ClientInfo";

function Banner() {
  return (
    <div className="relative bg-[url('../img/background.png')] bg-no-repeat bg-cover rounded-lg">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
        className="py-3"
      >
        <ClientInfo />
        <ClientInfo />
        <ClientInfo />
        <ClientInfo />
      </Carousel>
    </div>
  );
}

export default Banner;
