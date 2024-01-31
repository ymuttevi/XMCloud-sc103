import { AppProps } from 'next/app';

interface CustomPageProps { // <--- your custom page props
   // your props
}

function App({ Component, pageProps }: AppProps<CustomPageProps>) {
                                             //   ^^^ use your custom props here
  return <Component {...pageProps} />
                    // ^^^^^ pageProps is now typeof CustomPageProps
}
export default App