import React, { useContext, useState } from 'react';
import {
    Grid,
    Skeleton,
    Heading,
    Flex,
    Text,
    Button,
    GridItem,
    Stack,
    Image,
    Link as StyledLink,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/client';
import Link from 'next/link';
import { useImageContext } from '../context/Images';
import { useColorModeValue } from '@chakra-ui/color-mode';
import GalleryImage from './GalleryImage';

const Gallery = () => {
    const [session] = useSession();
    const { urls } = useImageContext();

    const textColor = useColorModeValue('gray.600', 'gray.200');

    return session ? (
        <Grid
            px={{ base: 4, md: 8 }}
            my={8}
            templateColumns={{ base: 'auto', md: 'repeat(4, 1fr)' }}
            gap="2"
            width="full"
        >
            {urls ? (
                urls.map((i) => {
                    let extension = i.URL.split('.')[4]
                        .split('?')[0]
                        .toLowerCase();
                    if (extension == 'mp4') {
                        return (
                            <Link href={`/p/${i.Key}`} key={i.Key}>
                                <a>
                                    <video src={i.URL} controls></video>
                                </a>
                            </Link>
                        );
                    } else {
                        return <GalleryImage src={i.URL} key={i.Key} />;
                    }
                })
            ) : (
                <GridItem colSpan={4}>
                    <Skeleton colSpan={4} h={'100vh'} />
                </GridItem>
            )}
        </Grid>
    ) : (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            py={60}
            px={4}
            m={{ base: 4, md: 8 }}
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
                <Flex h={28} w={28} textColor={textColor}>
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
                textColor={textColor}
                textAlign="center"
                fontWeight="regular"
            >
                You are not Sofi or Dani &gt;:c
            </Heading>
            <Text textColor={textColor} textAlign="center" fontWeight="regular">
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
