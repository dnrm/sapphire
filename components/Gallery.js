/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Grid, Stack, Heading, Flex, Text, Button } from '@chakra-ui/react';
import Photo from './Photo';
import { useSession } from 'next-auth/client';
import Link from 'next/link';
import Image from 'next/image'

const Gallery = () => {
    const [session] = useSession();
    const [urls, setUrls] = useState();

    useEffect(() => {
        if (session) {
            const getUrls = async () => {
                const response = await fetch('/api/get-urls');
                const json = await response.json();
                setUrls(json);
            };

            getUrls();
        }
    }, [session]);

    return session ? (
        <Grid
            px={8}
            my={8}
            templateColumns={{ base: 'auto', md: 'repeat(4, 1fr)' }}
            gap="2"
            width="full"
        >
            {urls ? urls.map((i) => {
                let extension = i.URL.split('.')[5].split('?')[0].toLowerCase();
                console.log(extension)

                if (extension == 'mp4') {
                    return (
                        <video src={i.URL} controls></video>
                    )
                } else {
                    return (

                        <img src={i.URL} loading="lazy" alt="Cute photo" />
                    )
                }
            }) : null}
        </Grid>
    ) : (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            py={60}
            m={8}
            bgImage={'/unauthorised-bg.png'}
            bgRepeat="no-repeat"
            bgSize="cover"
        >
            <Flex
                h={32}
                w={'full'}
                alignItems="center"
                justifyContent="center"
                opacity="1"
            >
                <Flex h={28} w={28} textColor="gray.600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Flex>
            </Flex>
            <Heading
                textColor="gray.600"
                textAlign="center"
                fontWeight="regular"
            >
                You are not Sofi or Dani &gt;:c
            </Heading>
            <Text textColor="gray.600" textAlign="center" fontWeight="regular">
                ...or you are not logged in &lt;3
            </Text>
            <Link href="/login">
                <a>
                    <Button mt={2} colorScheme="blue" variant="outline">
                        Log In
                    </Button>
                </a>
            </Link>
        </Flex>
    );
};

export default Gallery;
