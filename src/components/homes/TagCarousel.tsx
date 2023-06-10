import React from "react";
import {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {FaArrowRight} from 'react-icons/fa';
import Link from "next/link";
import {TagModel} from "@/models/tag";

interface TagCarouselProps {
    tags: TagModel[]
}

const TagCarousel = ({tags}: TagCarouselProps) => {
    return (
        <div className="container mx-auto mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="flex flex-col-reverse col-span-1 bg-transparent  p-4 h-80">
                    <Link href="/tag" className="flex items-center">
                        <button
                            className="rounded-full bg-gray-700 dark:bg-gray-50 w-10 h-10 flex items-center justify-center">
                            <FaArrowRight className="text-gray-50 dark:text-gray-700 w-4 h-4"/>
                        </button>
                        <div className="dark:text-gray-50 text-gray-700 ml-5 uppercase font-bold">
                            Xem toàn bộ
                        </div>
                    </Link>
                    <div className="mb-5 h-full flex flex-col justify-center w-3/4">
                        <h3 className="dark:text-gray-50 text-gray-900 text-3xl font-bold mb-2">Danh sách thẻ</h3>
                        <p className="dark:text-gray-50 text-gray-700 text-lg">Xem toàn bộ danh sách các thẻ đặc sắc</p>
                    </div>
                </div>
                <div className="col-span-3">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        slidesPerView={3}
                        navigation
                        spaceBetween={30}
                    >
                        {tags.map((tag, index) => (
                            <SwiperSlide key={index}>
                                <div className={`flex flex-col-reverse bg-white h-80 bg-cover bg-no-repeat bg-center`} style={{backgroundColor: tag.color}}>
                                    <div className="backdrop-hue-rotate-30 bg-black/30 p-6 ">
                                        <h3 className="text-gray-50 text-3xl font-bold mb-2">{tag.name}</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TagCarousel;
