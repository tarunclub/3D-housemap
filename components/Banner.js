import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20 " />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}>
        <div>
          <Image alt="avatar" loading="lazy" layout="fill" src="https://links.papareact.com/gi1" />
        </div>
        <div>
          <Image alt="avatar" loading="lazy" layout="fill" src="https://links.papareact.com/6ff" />
        </div>
        <div>
          <Image alt="avatar" loading="lazy" layout="fill" src="https://links.papareact.com/7ma" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
