import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import StyleProvider from '../providers/StyleProvider'
import AuthProvider from '../providers/AuthProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <AuthProvider>
        <Component {...pageProps} />
        <Toaster toastOptions={{ duration: 3000 }} />
      </AuthProvider>
    </StyleProvider>
  )
}

export default MyApp
