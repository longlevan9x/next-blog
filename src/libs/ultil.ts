import {AuthorModel, PublishedModel} from "@/models/post";
import moment from "moment";
import 'moment/locale/vi';

const DEFAULT_IMAGE = '/images/eye.png';

export function getAuthor(authors?: AuthorModel[]) {
    return authors?.length ? authors[0].name : '';
}

export function getPublishedDate(published?: PublishedModel) {
    return moment(published?.start).locale(['vi']).format('DD, MMMM YYYY') || '';
}

export function getCover(cover?: string) {
    return cover || DEFAULT_IMAGE;
}

export function onCoverError(e: any) {
    return e.target.srcset = DEFAULT_IMAGE;
}
