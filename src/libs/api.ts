import axios from "axios";

const axiosClient = axios.create({
    headers: {
        origin: process.env.BASE_URL
    },
    baseURL: process.env.API_URL
});

export default class Api {
    static getPosts(params: { keyword?: string, limit?: number, tags?: any[] | string } = {}) {

        if (params.tags) {
            params.tags = params.tags.toString();
        }

        return axiosClient.get('app/posts', {params});
    }

    static getPostIds() {
        return axiosClient.get('app/posts/ids');
    }

    static getPostDetail(id: string) {
        return axiosClient.get(`app/posts/${id}`);
    }

    static getPostBlocks(id: string) {
        return axiosClient.get(`app/posts/${id}/blocks`);
    }

    static getPostDetailContent(id: string) {
        return axiosClient.get(`app/posts/${id}/content`);
    }

    static getSliders() {
        return axiosClient.get('app/sliders');
    }

    static getTags() {
        return axiosClient.get('app/tags');
    }
}