import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import ThemeWrapper from "@/components/layouts/ThemeWrapper";
import "react-medium-image-zoom/dist/styles.css";
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import store from "@/stores/store";

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <ThemeWrapper>
                <Component {...pageProps} />
            </ThemeWrapper>
        </Provider>
    );
}
