import React from 'react';
import Head from 'next/head';
import { Divider, Heading, Stack, Button } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const unauthorised = () => {
    return (
        <>
            <Head>
                <title>Unauthorised | sapphire</title>
                <meta
                    name="description"
                    content="Cute photos of Sofi and Dani"
                />
            </Head>
            <Navbar />
            <Divider mb="8" />
            <Stack px={8} id="main">
                <Heading
                    fontWeight="regular"
                    fontSize={{ base: '2em', md: '4em' }}
                >
                    You aren&amp;t Sofi or Dani!!!
                </Heading>
            </Stack>
        </>
    );
};

export default unauthorised;
