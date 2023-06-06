import React from 'react';
import MainPage from "@/components/layouts/MainPage";
import CategoryListPage from "@/components/categories/CategoryListPage";

const CategoryPage: React.FC = () => {

    return (
        <MainPage>
            <CategoryListPage></CategoryListPage>
        </MainPage>
    );
};

export default CategoryPage;

