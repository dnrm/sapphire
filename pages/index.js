import { Grid, Divider } from '@chakra-ui/react';
import Head from 'next/head';
import Photo from '../components/Photo';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery'

export default function Home() {
    return (
        <>
            <Head>
                <title>Cute Photos | sapphire.medina.dev</title>
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
            <Navbar />
            <Divider />
            <Hero />
            <Divider />
            <Gallery />
        </>
    );
}
