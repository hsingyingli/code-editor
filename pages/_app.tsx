import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import StyleProvider from '../providers/StyleProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <Component {...pageProps} />
      <Toaster toastOptions={{ duration: 3000 }} />
    </StyleProvider>
  )
}

export default MyApp
