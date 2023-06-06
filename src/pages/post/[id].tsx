import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import {PostModel} from "@/models/post";
import Api from "@/libs/api";
import MainPage from "@/components/layouts/MainPage";
import NotionRender from "@/components/templates/NotionRender";
import {useDispatch} from "react-redux";
import {setMeta} from "@/reducers/headMetaSlice";
import {useEffect} from "react";
import {AppDispatch} from "@/stores/store";

export const getStaticProps: GetStaticProps = async (context) => {
    const id: any = context.params?.id;

    const resPost = await Api.getPostDetail(id as string);
    const resBlock = await Api.getPostBlocks(id as string);

    return {
        props: {
            post: resPost.data,
            blocks: resBlock.data.results,
            pageId: id
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const resPost = await Api.getPostIds();
    const postIds = resPost.data;

    const paths = postIds.map((post: any) => ({
        params: {
            id: post.id,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

const PostDetailPage = ({post, blocks}: { post: PostModel, blocks: any }) => {
    const router = useRouter();
    const pathname = router.pathname;
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(setMeta({siteTitle: post.title, siteDescription: post.description, ogImage: post.cover, url: pathname}));
    }, [dispatch]);


    return (
        <MainPage>
            <div className="max-w-5xl mx-auto mt-44">
                <div className="mx-auto">
                    <img src={post.cover} alt="Post Image" className="w-full mb-4"/>
                    <h2 className="text-3xl font-bold mb-4">Title of the Post</h2>
                    <p className="text-gray-500 mb-4">Published on June 1, 2023 by John Doe</p>
                    <NotionRender contents={blocks}/>
                </div>
            </div>
        </MainPage>
    );
};

export default PostDetailPage;
