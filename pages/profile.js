import React from 'react';
import Head from 'next/head';
import { Divider, Heading, Stack, Button } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { signOut } from 'next-auth/client'

const profile = () => {
    return (
        <>
            <Head>
                <title>Profile | sapphire</title>
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
                    My Profile
                </Heading>
                <Button onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</Button>
            </Stack>
        </>
    );
};

export default profile;
