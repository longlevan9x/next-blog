import MainPage from "@/components/layouts/MainPage";
import {PostModel} from "@/models/post";
import Api from "@/libs/api";
import React from "react";
import PostList from "@/components/posts/PostList";

const PostPage = ({posts}: { posts: PostModel[] }) => {
    return (
        <MainPage>
            <div className="mt-44">
                <PostList posts={posts}></PostList>
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

export default PostPage;
