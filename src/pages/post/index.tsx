import PostListCard from "@/components/posts/PostListCard";
import MainPage from "@/components/layouts/MainPage";
import {PostModel} from "@/models/post";
import Api from "@/libs/api";
import {BiGridAlt, BiListUl} from "react-icons/bi";
import React, {useState} from "react";

const BlogPage = ({posts}: { posts: PostModel[] }) => {
    const [viewMode, setViewMode] = useState("list"); // Mặc định là xem danh sách

    const handleViewModeChange = (mode: string) => {
        setViewMode(mode);
    };

    return (
        <MainPage>
            <div className="mt-44">
                <div className="sm:w-full md:w-full lg:w-full xl:w-11/12 2xl:w-4/5 mx-auto max-w-7xl px-10">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-bold mb-4">Danh sách bài viết</h1>
                        <div className="flex justify-end mb-4">
                            <button
                                className={`mr-2 px-2 py-1 rounded-md ${
                                    viewMode === "list" ? "bg-gray-200" : "bg-white"
                                }`}
                                onClick={() => handleViewModeChange("list")}
                            >
                                <BiListUl className="text-gray-700"/>
                            </button>
                            <button
                                className={`px-2 py-1 rounded-md ${
                                    viewMode === "grid" ? "bg-gray-200" : "bg-white"
                                }`}
                                onClick={() => handleViewModeChange("grid")}
                            >
                                <BiGridAlt className="text-gray-700"/>
                            </button>
                        </div>
                    </div>

                    <PostListCard posts={posts} viewMode={viewMode}/>
                </div>
            </div>
        </MainPage>
    );
};

export async function getStaticProps() {
    // Gửi yêu cầu GET đến API để lấy danh sách bài viết
    const resPost = await Api.getPosts();
    const posts = resPost.data;

    return {
        props: {
            posts,
        },
    };
}

export default BlogPage;
