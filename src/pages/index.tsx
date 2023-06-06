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

const inter = Inter({subsets: ['latin']})


interface HomeProps {
    posts: PostModel[],
    sliders: SliderModel[]
}

export const getStaticProps: GetStaticProps = async (context) => {
    const resPosts = await Api.getPosts({limit: 8});
    const posts = resPosts.data;

    const resSliders = await Api.getSliders();
    const sliders = resSliders.data;

    return {
        props: {
            posts,
            sliders
        },
        revalidate: 10,
    };
};


const Home = ({posts, sliders}: HomeProps) => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(setMeta({siteTitle: 'Home'}));
    }, [dispatch]);

    return (
        <MainPage>
            <SliderCarousel sliders={sliders}></SliderCarousel>
            <CategoryCarousel></CategoryCarousel>
            <MaterialDesignBlogPage posts={posts}></MaterialDesignBlogPage>
        </MainPage>
    );
};

export default Home;