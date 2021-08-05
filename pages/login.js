import React from 'react';
import Head from 'next/head';
import { Divider, Heading, Stack } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { useSession } from 'next-auth/client';

const login = () => {
    return (
        <>
            <Head>
                <title>Login | sapphire</title>
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
                    Log In
                </Heading>
            </Stack>
        </>
    );
};

export default login;
