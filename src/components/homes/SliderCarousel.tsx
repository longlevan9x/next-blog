import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';

import {Autoplay, Navigation, Pagination} from "swiper";
import {Transition} from '@headlessui/react';
import {useEffect, useState} from "react";
import {SliderModel} from "@/models/slider";
import Image from "next/image";

const SliderCarousel = ({sliders}: {sliders: SliderModel[]} ) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.pageYOffset > window.innerHeight / 2);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative h-screen" id="slider">
            <Swiper
                className="h-full"
                slidesPerView={1}
                pagination={{clickable: true}}
                effect="cube"
                loop={true}
                grabCursor
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                autoplay={{delay: 2500, disableOnInteraction: false,}}
            >
                {sliders.map((slider: SliderModel) => (
                    <SwiperSlide key={slider.id}>
                        <div className="relative h-full">
                            <Image className="w-full h-full object-cover" width={10000} height={10000} src={slider.files?.length ? (slider.files[0].url || '') : ''} alt="Slide 1"/>
                            <Transition
                                show={!isScrolled}
                                enter="transition-opacity duration-500"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div
                                    className="absolute inset-0 flex flex-row py-6 mb-3.5 items-end justify-around transition-opacity duration-300 ">
                                    <div className="w-2/3">
                                        <h2 className="text-5xl mb-4 text-white">{slider.title}</h2>
                                        <p className="text-2xl mb-6 text-white">{slider.description}</p>
                                    </div>
                                    <button
                                        className="px-4 py-2 mb-6 text-zinc-900 bg-white  hover:bg-indigo-100">Read More
                                    </button>
                                </div>
                            </Transition>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderCarousel;
