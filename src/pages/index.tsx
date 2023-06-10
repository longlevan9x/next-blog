import {Inter} from 'next/font/google'
import {GetStaticProps} from "next";
import {SliderModel} from "@/models/slider";
import {PostModel} from "@/models/post";
import Api from "@/libs/api";
import MainPage from "@/components/layouts/MainPage";
import {useDispatch} from "react-redux";
import {setMeta} from "@/reducers/headMetaSlice";
import {useEffect} from "react";
import CategoryCarousel from "@/components/homes/CategoryCarousel";
import SliderCarousel from "@/components/homes/SliderCarousel";
import MaterialDesignBlogPage from "@/components/homes/MaterialDesignBlogPage";
import {AppDispatch} from "@/stores/store";
import TagCarousel from "@/components/homes/TagCarousel";
import {TagModel} from "@/models/tag";

const inter = Inter({subsets: ['latin']})


interface HomeProps {
    posts: PostModel[],
    sliders: SliderModel[],
    tags: TagModel[]
}

const handleResponseError = (res: any) => {
    if (res.status === 'rejected') {
        console.log(res.reason.response);
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const pPost = Api.getPosts({limit: 8});
    const pSlider = Api.getSliders();
    const pTag = Api.getTags();

    const [resPosts, resSliders, resTag]: any = await Promise.allSettled([pPost, pSlider, pTag]);

    const posts = resPosts?.value?.data || [];
    const sliders = resSliders?.value?.data || [];
    const tags = resTag?.value?.data || [];

    return {
        props: {
            posts,
            sliders,
            tags
        },
        revalidate: 10,
    };
};


const Home = ({posts, sliders, tags}: HomeProps) => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(setMeta({siteTitle: 'Home'}));
    }, [dispatch]);

    return (
        <MainPage>
            <SliderCarousel sliders={sliders}></SliderCarousel>
            <CategoryCarousel></CategoryCarousel>
            <TagCarousel tags={tags}></TagCarousel>
            <MaterialDesignBlogPage posts={posts}></MaterialDesignBlogPage>
        </MainPage>
    );
};

export default Home;