import { Grid, Divider } from '@chakra-ui/react';
import Head from 'next/head';
import Photo from '../components/Photo';
import Navbar from '../components/Navbar';

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
            <Divider mb="8" />
            <Grid px={8} templateColumns={{ base: 'auto', md: "repeat(2, 1fr)" }} gap="2" width="full">
                <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
                <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
                <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
                <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
                <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
                <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
                <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
                <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
                <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
                <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
                <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
                <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
                <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
                <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
                <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
                <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
                <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
                <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
                <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
                <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
                <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
                <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
                <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
                <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
            </Grid>
        </>
    );
}
