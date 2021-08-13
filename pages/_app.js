import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';
import { ToastProvider } from 'react-toast-notifications';

function MyApp({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <ChakraProvider>
                <ToastProvider>
                    <Component {...pageProps} />
                </ToastProvider>
            </ChakraProvider>
        </Provider>
    );
}

export default MyApp;
