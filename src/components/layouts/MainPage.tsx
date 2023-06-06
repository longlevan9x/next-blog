import React, {useEffect} from "react";
import {NextSeo} from "next-seo";
import Head from "next/head";
import MenuPage from "@/components/layouts/MenuPage";
import FooterPage from "@/components/layouts/FooterPage";
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store";

interface MainTemplateProps {
    children: React.ReactNode;
}

const MainPage = ({children}: MainTemplateProps) => {
    const meta = useSelector((state: RootState) => state.headMeta.meta);

    return (
        <>
            <NextSeo
                title={meta.siteTitle}
                description={meta.siteDescription}
                canonical={meta.url}
                openGraph={{
                    title: meta.siteTitle,
                    description: meta.siteDescription,
                    images: [
                        {
                            url: meta.ogImage || '',
                            width: 800,
                            height: 400,
                            alt: meta.siteTitle,
                        },
                    ],
                }}
            />
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>{meta.siteTitle}</title>
                <link rel="icon" href=""/>
                <meta name="author" content={meta.author}/>
            </Head>
            <MenuPage></MenuPage>
            {children}
            <FooterPage/>
        </>
    );
};

export default MainPage;
