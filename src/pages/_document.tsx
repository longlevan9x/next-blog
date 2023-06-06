import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="overflow-y-scroll scrollbar-thin scrollbar-thumb-amber-500 dark:scrollbar-thumb-amber-900 dark:scrollbar-track-cyan-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
