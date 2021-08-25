import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';
import { ToastProvider } from 'react-toast-notifications';
import DarkModeToggle from '../components/DarkModeToggle';

function MyApp({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <ChakraProvider>
                <ToastProvider>
                    <Component {...pageProps} />
                    <DarkModeToggle />
                </ToastProvider>
            </ChakraProvider>
        </Provider>
    );
}

export default MyApp;
