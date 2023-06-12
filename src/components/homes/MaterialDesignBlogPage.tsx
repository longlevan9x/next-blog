import React, {useEffect, useState} from 'react';
import {Transition} from "@headlessui/react";
import {PostModel} from "@/models/post";
import Link from "next/link";
import {getAuthor, getCover, getPublishedDate, onCoverError} from "@/libs/ultil";
import {FaArrowRight} from "react-icons/fa";
import {BiCalendarAlt, BiUser} from "react-icons/bi";
import Image from "next/image";

const MaterialDesignBlogPage = ({posts, title}: {posts: PostModel[], title: string}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const triggerOffset = window.innerHeight * 0.1; // Điều chỉnh ngưỡng hiển thị tại đây

            if (scrollTop > triggerOffset) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container mx-auto py-16">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">{title}</h2>
                <button className="px-4 py-2 bg-blue-500 text-white  hover:bg-blue-600">Xem thêm</button>
            </div>
            <div
                className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                {posts.map((post: PostModel) => (
                    <Transition
                        key={post.id}
                        show={isVisible}
                        enter="transition-opacity transition  duration-[1500ms] "
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity transition  duration-300 "
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            key={post.id}
                            className="bg-white shadow-md overflow-hidden transform transition duration-300 hover:scale-95 min-h-[400px]"
                        >
                            <Link href={`post/${post.id}`}>
                                <Image
                                    src={getCover(post.cover)}
                                    onError={(e) => onCoverError(e)}
                                    width={400} height={100}
                                    alt={post.title || ''}
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-6 flex flex-col justify-between h-60">
                                    <div>
                                        <h3 className="text-gray-700 text-2xl font-bold mb-4 line-clamp-2">{post.title}</h3>
                                        <p className="text-gray-700 line-clamp-2">{post.description}</p>
                                    </div>
                                    <div className="flex justify-between mt-4 items-end">
                                        <div className="text-gray-500 flex flex-col">
                                            <div className="flex items-center">
                                                <BiUser className="inline-block mr-1"/>
                                                <span className="mr-2">{getAuthor(post.authors)}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <BiCalendarAlt className="inline-block mr-1"/>
                                                <span>{getPublishedDate(post.published)}</span>
                                            </div>
                                        </div>
                                        <Link href={`/post/${post.id}`}>
                                            <button
                                                className="flex items-center px-3 py-1 border border-green-500 text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 hover:text-white hover:bg-green-500 hover:border-green-600 transition-colors duration-300 pointer-events-auto">
                                                <span className="mr-2">Đọc thêm</span>
                                                <FaArrowRight className="text-xs"/>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Transition>
                ))}
            </div>
        </div>
    );
};

export default MaterialDesignBlogPage;
