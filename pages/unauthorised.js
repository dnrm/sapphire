import React from 'react';
import Head from 'next/head';
import { Divider, Heading, Stack, Flex, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { signOut } from 'next-auth/client'

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
            <Flex px={8} id="main" h={'85vh'} justifyContent="center" alignItems="start" direction="column">
                <Heading
                    fontWeight="regular"
                    fontSize={{ base: '1.8em', md: '2em' }}
                >
                    You aren&apos;t Sofi or Dani :P
                </Heading>
                <Text fontSize={{ base: '0.9em', md: '1em' }}>
                    Or maybe you are, just make sure to login with the correct account :D
                </Text>
            </Flex>
        </>
    );
};

export default unauthorised;
