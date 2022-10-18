import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const C = Component as any;
  return <C {...pageProps} />;
}

export default MyApp
