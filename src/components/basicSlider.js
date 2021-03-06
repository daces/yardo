import Image from "next/image";
// import fourPic from "../../public/images/carousel/4.png";
import fourPic from "../../public/images/carousel/4.png";
import thirteenPic from "../../public/images/carousel/13.png";
import elevenPic from "../../public/images/carousel/11.png";
import twentyPic from "../../public/images/carousel/20.jpg";
import nineteenPic from "../../public/images/carousel/19.png";
import eightteenPic from "../../public/images/carousel/18.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
	Autoplay,
	Pagination,
	Navigation,
	EffectFade,
} from "swiper/core";

// Import Swiper styles
import slide from "./Slider.module.css";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

const BasicSlider = ({ Component, pageProps }) => {
	return (
		<Swiper
			effect="fade"
			loop={true}
			fadeEffect={{ crossFade: true }}
			slidesPerView={5}
			initialSlide={1}
			centeredSlides={true}
			// slidesPerView={1}
			// spaceBetween={0}
			// centeredSlides={false}
			// onSlideChange={() => console.log("slide change")}
			// onSwiper={(swiper) => console.log(swiper)}
			// loop={true}
			autoplay={{
				delay: 3500,
				disableOnInteraction: false,
			}}
			// effect="fade"
			// fadeEffect={{
			// 	crossFade: true,
			// }}
			className={slide.swiperContainer}
		>
			<div className={slide.heroSliderWrap}>
				<h2 className="title">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</h2>
				<p className="hero-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
				<button>
					<a href="#courses">See Courses</a>
				</button>
			</div>
			<SwiperSlide>
				<div className="hero-slider">
					<Image
						width="600"
						height="450"
						src={fourPic}
						alt="Picture of the author"
					/>
					{/* <img className="slide-image" src="/images/carousel/4.png" /> */}
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="hero-slider">
					<Image
						width="600"
						height="450"
						src={thirteenPic}
						alt="Picture of the author"
					/>
					{/* <img className="slide-image" src="/images/carousel/13.png" /> */}
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="hero-slider">
					<Image
						width="600"
						height="450"
						src={elevenPic}
						alt="Picture of the author"
					/>
					{/* <img className="slide-image" src="/images/carousel/11.png" /> */}
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="hero-slider">
					<Image
						width="600"
						height="450"
						src={twentyPic}
						alt="Picture of the author"
					/>
					{/* <img className="slide-image" src="/images/carousel/20.jpg" /> */}
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="hero-slider">
					<Image
						width="600"
						height="450"
						src={nineteenPic}
						alt="Picture of the author"
					/>
					{/* <img className="slide-image" src="/images/carousel/19.png" /> */}
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="hero-slider">
					<Image
						width="600"
						height="450"
						src={eightteenPic}
						alt="Picture of the author"
					/>
					{/* <img className="slide-image" src="/images/carousel/18.png" /> */}
				</div>
			</SwiperSlide>
			...
		</Swiper>
	);
};
export default BasicSlider;
