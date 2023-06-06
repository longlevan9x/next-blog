import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface MetaInterface {
    siteTitle?: string;
    siteDescription?: string;
    url?: string;
    ogImage?: string;
    author?: string;
}

interface HeadMetaState {
    meta: MetaInterface
}

const initialState: HeadMetaState = {
    meta: {
        siteTitle: '',
        siteDescription: '',
        url: '',
        ogImage: '',
        author: '',
    }
};

const headMetaSlice = createSlice({
    name: 'headMeta',
    initialState,
    reducers: {
        setMeta: (state, action: PayloadAction<MetaInterface>) => void (state.meta = action.payload)
    },
});

export const {setMeta} = headMetaSlice.actions;
export default headMetaSlice.reducer;
