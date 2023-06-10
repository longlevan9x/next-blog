import React from 'react';
import MainPage from "@/components/layouts/MainPage";
import TagListPage from "@/components/tags/TagListPage";
import Api from "@/libs/api";
import {GetStaticProps} from "next";
import {TagModel} from "@/models/tag";

interface TagPageProps {
    tags: TagModel[]
}

const TagPage = ({tags}: TagPageProps) => {

    return (
        <MainPage>
            <TagListPage tags={tags}></TagListPage>
        </MainPage>
    );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
    const resTag = await Api.getTags();
    const tags = resTag.data;

    return {
        props: {
            tags,
        },
    };
}

export default TagPage;

