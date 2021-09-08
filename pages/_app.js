import { ChakraProvider } from '@chakra-ui/react';
import { Provider, useSession } from 'next-auth/client';
import { ToastProvider } from 'react-toast-notifications';
import DarkModeToggle from '../components/DarkModeToggle';
import ImageWrapper from '../context/Images';
import { AnimateSharedLayout } from 'framer-motion';

function MyApp({ Component, pageProps }) {
    return (
        <AnimateSharedLayout>
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
        </AnimateSharedLayout>
    );
}

export default MyApp;
