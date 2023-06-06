export interface PublishedModel {
    start?: string;
    end?: string;
}

export interface AuthorModel {
    name?: string
}

export interface PostModel {
    id?: string;
    cover?: string;
    title?: string;
    authors?: AuthorModel[];
    description?: string;
    published?: PublishedModel;
    tags?: string[];
}
