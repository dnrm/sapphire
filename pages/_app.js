import { ChakraProvider } from '@chakra-ui/react';
import { Provider, useSession } from 'next-auth/client';
import { ToastProvider } from 'react-toast-notifications';
import DarkModeToggle from '../components/DarkModeToggle';
import ImageWrapper from '../context/Images';

function MyApp({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <ChakraProvider>
                <ToastProvider>
                    <ImageWrapper>
                        <Component {...pageProps} />
                    </ImageWrapper>
                    <DarkModeToggle />
                </ToastProvider>
            </ChakraProvider>
        </Provider>
    );
}

export default MyApp;
