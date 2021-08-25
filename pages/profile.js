import React from 'react';
import Head from 'next/head';
import { Divider, Heading, Stack, Button, Text, Image } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { signOut, getSession } from 'next-auth/client';

const profile = ({ session }) => {
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
                <Divider mb={8} />
                <Stack id="user-data" py={8}>
                    <Stack>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <Image src={session.user.image} alt="Profile image" w={24} rounded="full" borderWidth="4px" />
                    </Stack>
                    <Heading m={0} fontSize={{ base: '1em', md: '2em' }}>
                        {session.user.name}
                    </Heading>
                    <Text
                        m={0}
                        fontSize={{ base: '0.8em', md: '1em' }}
                        textColor={'gray.500'}
                    >
                        {session.user.email}
                    </Text>
                </Stack>
                <Button onClick={() => signOut({ callbackUrl: '/' })}>
                    Sign Out
                </Button>
            </Stack>
        </>
    );
};

export default profile;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (session) {
        return {
            props: {
                session,
            },
        };
    }
}
