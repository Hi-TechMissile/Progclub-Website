import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
export default function Document() {
  
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.webmanifest"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
      <body className='!bg-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
