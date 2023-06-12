import React, {useState} from "react";
import {BiCalendarAlt, BiUser, BiFolder} from "react-icons/bi";
import {PostModel} from "@/models/post";
import {getAuthor, getCover, getPublishedDate, onCoverError} from "@/libs/ultil";
import Image from "next/image";
import {FaArrowRight} from "react-icons/fa";
import Link from "next/link";
import {Transition} from "@headlessui/react";

interface PostViewProps {
    posts: PostModel[],
    viewMode?: string
}

const RenderListView = ({posts}: PostViewProps) => {
    return (
        <>
            <div className="grid grid-cols-1 gap-8">
                {posts.map((post) => (
                    <div key={post.id}
                         className="flex bg-white shadow-md transform transition duration-300 hover:scale-95 min-h-[380px]">
                        <div className="grid grid-cols-5">
                            <div className="col-span-2">
                                <Image src={getCover(post.cover)}
                                       alt={post.title || ''}
                                       width={500}
                                       height={400}
                                       loading="lazy"
                                       onError={(e) => onCoverError(e)}
                                       className=" h-96 object-cover"/>
                            </div>

                            <div className="flex flex-col p-6 col-span-3 justify-between">
                                <div>
                                    <div className="flex flex-row items-center text-gray-500 mb-2">
                                        <Image className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                               width={12}
                                               height={12}
                                               src="/images/doremon.png" alt=""/>
                                        <div className="flex flex-col ml-5 justify-items-start">
                                            <span>{getAuthor(post.authors)}</span>
                                            <span>{getPublishedDate(post.published)}</span>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl text-gray-700 font-mono mb-2">{post.title}</h2>
                                    <p className="text-gray-500 mb-2">{post.description}</p>
                                </div>
                                <div className=" border-t pt-5">
                                    <Link href={`/post/${post.id}`}>
                                        <button
                                            className="flex items-center px-3 py-2 border border-green-500 text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 hover:text-white hover:bg-green-500 hover:border-green-600 transition-colors duration-300 pointer-events-auto">
                                            <span className="mr-2">Đọc thêm</span>
                                            <FaArrowRight className="text-base"/>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

const RenderGridView = ({posts}: PostViewProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <div key={post.id}
                     className="bg-white shadow-md  transform transition duration-300 hover:scale-95 min-h-[400px]">
                    <div className="h-52">
                        <Image src={getCover(post.cover)} alt={post.title || ''} width={400} height={100}
                               className="w-full h-52 object-cover" onError={(e) => onCoverError(e)}/>
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-2 text-gray-500 line-clamp-2 h-16">{post.title}</h2>
                        <h2 className="text-base mb-2 text-gray-500 line-clamp-2 h-12">{post.description}</h2>
                        <p className="text-gray-500 mb-2">
                            <BiCalendarAlt className="inline-block mr-1"/>
                            {getPublishedDate(post.published)}
                        </p>
                        <p className="text-gray-500 mb-2">
                            <BiUser className="inline-block mr-1"/>
                            {getAuthor(post.authors)}
                        </p>
                        <div className="border-t pt-3">
                            <Link href={`/post/${post.id}`}>
                                <button
                                    className="flex items-center px-3 py-1 border border-green-500 text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 hover:text-white hover:bg-green-500 hover:border-green-600 transition-colors duration-300 pointer-events-auto">
                                    <span className="mr-2">Đọc thêm</span>
                                    <FaArrowRight className="text-xs"/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


const PostList = ({posts, viewMode}: PostViewProps) => {
    return (
        <>
            {viewMode === "list" ? <RenderListView posts={posts}/> : <RenderGridView posts={posts}/>}
        </>
    );
};

export default PostList;
