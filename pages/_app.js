import { ChakraProvider } from '@chakra-ui/react';
import { Provider, useSession } from 'next-auth/client';
import DarkModeToggle from '../components/DarkModeToggle';
import ImageWrapper from '../context/Images';
import { AnimateSharedLayout } from 'framer-motion';

function MyApp({ Component, pageProps }) {
    return (
        <AnimateSharedLayout>
            <Provider session={pageProps.session}>
                <ChakraProvider>
                    <ImageWrapper>
                        <Component {...pageProps} />
                    </ImageWrapper>
                    <DarkModeToggle />
                </ChakraProvider>
            </Provider>
        </AnimateSharedLayout>
    );
}

export default MyApp;
