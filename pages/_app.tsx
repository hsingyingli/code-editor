import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import StyleProvider from '../providers/StyleProvider'
import SupaProvider from '../providers/SupaProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <SupaProvider>
        <Component {...pageProps} />
      </SupaProvider>
      <Toaster toastOptions={{ duration: 3000 }} />
    </StyleProvider>
  )
}

export default MyApp
