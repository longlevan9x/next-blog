import React from "react";
import {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {FaArrowRight} from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";

const CategoryCarousel = () => {
    const categories = [
        {
            id: 1,
            name: "Danh mục 1",
            image: "https://cdn.pixabay.com/photo/2023/06/01/06/22/british-shorthair-8032816_960_720.jpg",
            color: "blue"
        },
        {
            id: 2,
            name: "Danh mục 2",
            image: "https://cdn.pixabay.com/photo/2023/05/28/12/10/spot-billed-ducks-8023527_1280.jpg",
            color: "green"
        },
        {
            id: 3,
            name: "Danh mục 3",
            image: "https://cdn.pixabay.com/photo/2023/05/31/18/15/st-stephens-basilica-8031985_1280.jpg",
            color: "purple"
        },
        {
            id: 4,
            name: "Danh mục 3",
            image: "https://cdn.pixabay.com/photo/2023/05/25/19/48/russian-orthodox-church-8018200_1280.jpg",
            color: "purple"
        },
        {
            id: 5,
            name: "Danh mục 3",
            image: "https://cdn.pixabay.com/photo/2023/05/31/11/15/fish-8031138_1280.jpg",
            color: "purple"
        },
        {
            id: 6,
            name: "Danh mục 3",
            image: "https://cdn.pixabay.com/photo/2023/02/05/15/47/amaryllis-7769802_1280.jpg",
            color: "purple"
        },
        {
            id: 7,
            name: "Danh mục 3",
            image: "https://cdn.pixabay.com/photo/2023/05/20/15/03/moon-8006703_1280.jpg",
            color: "purple"
        },
        {
            id: 8,
            name: "Danh mục 3",
            image: "https://cdn.pixabay.com/photo/2023/05/20/15/03/moon-8006703_1280.jpg",
            color: "purple"
        },
        {
            id: 9,
            name: "Danh mục 3",
            image: "https://cdn.pixabay.com/photo/2023/05/20/15/03/moon-8006703_1280.jpg",
            color: "purple"
        },
        {
            id: 10,
            name: "Danh mục 3",
            image: "https://cdn.pixabay.com/photo/2023/05/20/15/03/moon-8006703_1280.jpg",
            color: "purple"
        },
    ];

    return (
        <div className="container mx-auto mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="flex flex-col-reverse col-span-1 bg-transparent  p-4 h-80">
                    <Link href="/category" className="flex items-center">
                        <button className="rounded-full bg-gray-700 dark:bg-gray-50 w-10 h-10 flex items-center justify-center">
                            <FaArrowRight className="text-gray-50 dark:text-gray-700 w-4 h-4"/>
                        </button>
                        <div className="dark:text-gray-50 text-gray-700 ml-5 uppercase font-bold">
                            Xem toàn bộ
                        </div>
                    </Link>
                    <div className="mb-5 h-full flex flex-col justify-center w-3/4">
                        <h3 className="dark:text-gray-50 text-gray-900 text-2xl font-bold mb-2">Danh sách danh mục</h3>
                        <p className="dark:text-gray-50 text-gray-700 text-lg">Xem toàn bộ danh sách các danh mục đặc sắc</p>
                    </div>
                </div>
                <div className="col-span-3">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        slidesPerView={3}
                        navigation
                        spaceBetween={30}
                    >
                        {categories.map((category, index) => (
                            <SwiperSlide key={index}>
                                <div className={`flex flex-col-reverse bg-white h-80 bg-cover bg-no-repeat bg-center`}
                                     style={{backgroundImage: `url(${category.image})`}}>
                                    <div className="backdrop-hue-rotate-30  bg-black/30 p-5 ">
                                        <h3 className="text-gray-50 text-2xl font-bold mb-2">{category.name}</h3>
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

export default CategoryCarousel;
