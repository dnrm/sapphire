import { Grid, Divider, Heading, Badge } from '@chakra-ui/react';
import Head from 'next/head';
import Photo from '../components/Photo';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';

const DISABLED = true

export default function Home() {
    return (
        <>
            <Head>
                <title>Cute Photos | sapphire</title>
                <link
                    rel="shortcut icon"
                    href="/heart-icon.png"
                    type="image/x-icon"
                />
                <meta
                    name="description"
                    content="Cute photos of Sofi and Dani"
                />
            </Head>
            {/* Navigation bar */}
            <Navbar />
            <Divider />
            {/* Hero section with our profile pictures */}
            <Hero />
            <Divider />
            {/* Actual photo gallery */}
            {DISABLED ? (
                <Heading py={16} textAlign="center">Site disabled until <Badge fontSize="1em" colorScheme="red">01/09/21</Badge></Heading>
            ) : (
                <Gallery />
            )}
        </>
    );
}
