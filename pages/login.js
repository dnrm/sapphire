import React from 'react';
import Head from 'next/head';
import { Divider, Heading, Stack, Button } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { useSession, getProviders, signIn } from 'next-auth/client';

const login = ({ providers }) => {
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
                <Stack>
                    {Object.values(providers).map((provider) => (
                        <Stack key={provider.name}>
                            <Button onClick={() => signIn(provider.id, { callbackUrl: '/' })} h={14}>
                                Sign in with {provider.name}
                            </Button>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </>
    );
};

export default login;

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}
