import React, { useEffect, useState, useContext } from 'react';
import Navbar from '../../components/Navbar';
import {
    Divider,
    Heading,
    Grid,
    Skeleton,
    Button,
    Flex,
    Icon,
    Text,
    Stack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Image from 'next/image';
import Head from 'next/head';
import { useImageContext } from '../../context/Images';
import { motion } from 'framer-motion';

const Photo = ({ photo }) => {
    const [likes, setLikes] = useState(0);
    const [favourites, setFavourites] = useState(0);
    const [saved, setSaved] = useState(0);
    const [url, setUrl] = useState();

    const { urls } = useImageContext();
    const router = useRouter();

    useEffect(() => {
        if (urls) {
            const signedUrl = urls.find((url) => {
                return url.Key.includes(photo);
            });
            const { URL } = signedUrl;
            setUrl(URL);
        }
    }, [photo, urls]);

    const buttonColor = useColorModeValue('white', 'gray.700');

    return (
        <div>
            <Head>
                <title>{router.query.id}</title>
            </Head>
            <Navbar />
            <Divider />
            <Grid
                w={'100%'}
                gridTemplateColumns={{
                    base: 'repeat(1, 1fr)',
                    lg: '50% auto 49%',
                }}
                p={8}
                gap={4}
            >
                <Flex
                    height="100vh"
                    width="100%"
                    position="relative"
                    alignItems="start"
                    justifyContent="start"
                >
                    {url ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Image
                                alt="Image"
                                objectFit="contain"
                                layout="fill"
                                src={url}
                            ></Image>
                        </motion.div>
                    ) : null}
                </Flex>
                <Divider
                    py={2}
                    orientation={{ base: 'horizontal', md: 'vertical' }}
                />
                <Stack>
                    <Heading>Photo</Heading>
                    <Flex justifyContent="start" alignItems="start">
                        <Button
                            mr={1}
                            colorScheme="red"
                            variant="solid"
                            fontSize="1.2em"
                            textColor="white"
                            onClick={() => {
                                setLikes(likes + 1);
                            }}
                        >
                            <Icon viewBox="0 0 20 20" color={buttonColor}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Icon>
                            <Text textColor={buttonColor} pl={1}>
                                {likes}
                            </Text>
                        </Button>
                        <Button
                            mx={1}
                            colorScheme="yellow"
                            variant="solid"
                            fontSize="1.2em"
                            textColor="white"
                            onClick={() => {
                                setFavourites(favourites + 1);
                            }}
                        >
                            <Icon viewBox="0 0 20 20" color={buttonColor}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </Icon>
                            <Text textColor={buttonColor} pl={1}>
                                {favourites}
                            </Text>
                        </Button>
                        <Button
                            textColor="white"
                            mx={1}
                            colorScheme="teal"
                            variant="solid"
                            fontSize="1.2em"
                            onClick={() => {
                                setSaved(saved + 1);
                            }}
                        >
                            <Icon viewBox="0 0 20 20" color={buttonColor}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                </svg>
                            </Icon>
                            <Text textColor={buttonColor} pl={1}>
                                {saved}
                            </Text>
                        </Button>
                    </Flex>
                </Stack>
            </Grid>
        </div>
    );
};

export default Photo;

export async function getServerSideProps({ params }) {
    return {
        props: {
            photo: params.id,
        },
    };
}