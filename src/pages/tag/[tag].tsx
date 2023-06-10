import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import {PostModel} from "@/models/post";
import Api from "@/libs/api";
import MainPage from "@/components/layouts/MainPage";
import {useDispatch} from "react-redux";
import {setMeta} from "@/reducers/headMetaSlice";
import React, {useEffect} from "react";
import {AppDispatch} from "@/stores/store";
import PostList from "@/components/posts/PostList";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async (context) => {
    const tag: any = context.params?.tag;
    const resPost = await Api.getPosts({tags: [tag]});

    return {
        props: {
            posts: resPost.data,
            tag: tag
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const resTag = await Api.getTags();
    const tags = resTag.data;

    const paths = tags.map((tag: any) => ({
        params: {
            tag: tag.name,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

const TagDetailPage = ({posts, tag}: { posts: PostModel[], tag: string }) => {
    const router = useRouter();
    const pathname = router.pathname;
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(setMeta({
            siteTitle: "Thẻ " + tag,
            siteDescription: "Danh sách bài viết của thẻ",
            url: pathname
        }));
    }, [dispatch, pathname, tag]);


    return (
        <MainPage>
            <div className="mt-32">
                <div className="sm:w-full md:w-full lg:w-full xl:w-11/12 2xl:w-4/5 mx-auto max-w-7xl px-10">
                    <h1 className="text-3xl font-bold"><Link href={'/tag'}>Thẻ</Link> #{tag}</h1>
                    <p className="mb-4">Các bài viết của tag:</p>
                </div>

                <PostList posts={posts}></PostList>
            </div>
        </MainPage>
    );
};

export default TagDetailPage;
