import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";

const CategoryListPage = () => {
    const router = useRouter();

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
        // Thêm danh mục khác...
    ];

    return (
        <div className="container mx-auto mt-44">
            <h1 className="text-3xl font-bold mb-4">Danh sách danh mục</h1>
            <div className="columns-3 gap-10">
                {categories.map((category) => (
                    <Link className="relative" href="/post" key={category.id}>
                        <Image src={category.image} alt={category.name}
                               width={380}
                               height={380}
                               className="mb-10 w-full aspect-auto transform transition duration-300 hover:scale-105 min-h-[380px]"/>
                        <h2 className="absolute top-1/2 left-1/3 text-3xl font-bold mb-2">{category.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryListPage;
