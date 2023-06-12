import React, {useState} from "react";
import Link from "next/link";
import {TagModel} from "@/models/tag";
import Image from "next/image";

interface TagListPageProps {
    tags: TagModel[]
}

const TagListPage = ({tags}: TagListPageProps) => {
    return (
        <div className="container mx-auto mt-32">
            <h1 className="text-3xl font-bold">Danh sách thẻ</h1>
            <p className="mb-4">Bạn có thể tìm các bài viết theo các tags dưới đây:</p>
            <div className="flex flex-row mb-5">
                {tags.map((tag) => (
                    <Link
                        href={`/tag/${tag.name}`}
                        className="text-white px-2 py-1 mr-2 bg-gray-700 border border-cyan-600 cursor-pointer transform transition duration-300 hover:scale-95"
                        key={tag.name}>
                        {tag.name}
                    </Link>
                ))}
            </div>
            <div
                className="grid min-h-full place-items-center bg-white dark:bg-transparent py-10">
                <div className="text-center">
                    <Image src="/images/eye.png" className="w-full h-full" alt="example" width={500}
                           height={500}></Image>
                </div>
            </div>
        </div>
    );
};

export default TagListPage;
