import React, { useEffect, useState, useContext } from 'react';
import Navbar from '../../components/Navbar';
import Suggestions from '../../components/Suggestions';
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
    Image,
    GridItem,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Head from 'next/head';
import { useImageContext } from '../../context/Images';
import { motion } from 'framer-motion';
import { getSession } from 'next-auth/client';

const Photo = ({ photo }) => {
    const [likes, setLikes] = useState(0);
    const [saved, setSaved] = useState(0);
    const [url, setUrl] = useState();
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(false);

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

    const downloadImage = (url) => {
        window.open(url);
    };

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
                    lg: 'repeat(3, 1fr)',
                }}
                p={8}
                gap={8}
            >
                <GridItem
                    colSpan={1}
                    maxH="full"
                    alignItems="start"
                    justifyContent="start"
                >
                    {url ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {/*eslint-disable-next-line @next/next/no-img-element */}
                            <img alt="Image" src={url}></img>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Skeleton height="100vh" />
                        </motion.div>
                    )}
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 2 }}>
                    <Divider
                        py={2}
                        orientation={{ base: 'horizontal', md: 'vertical' }}
                    />
                    <Heading>{router.query.id}</Heading>
                    <Stack py={4}>
                        <Divider />
                    </Stack>
                    <Flex justifyContent="start" alignItems="start">
                        <Button
                            mr={1}
                            colorScheme="red"
                            variant="outline"
                            fontSize="1.2em"
                            onClick={() => {
                                setLikes(likes + 1);
                            }}
                        >
                            <Icon viewBox="0 0 20 20" color={'inherit'}>
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
                            <Text textColor={'inherit'} pl={1}>
                                {likes}
                            </Text>
                        </Button>
                        <Button
                            mx={1}
                            colorScheme="teal"
                            variant="outline"
                            fontSize="1.2em"
                            onClick={() => {
                                setSaved(saved + 1);
                            }}
                        >
                            <Icon viewBox="0 0 20 20" color={'inherit'}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                </svg>
                            </Icon>
                            <Text textColor={'inherit'} pl={1}>
                                {saved}
                            </Text>
                        </Button>
                        <Button
                            mx={1}
                            colorScheme="purple"
                            variant="outline"
                            fontSize="1.2em"
                            onClick={() => {
                                downloadImage(url);
                            }}
                        >
                            <Icon viewBox="0 0 20 20" color={'inherit'}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Icon>
                            <Text
                                textColor={'inherit'}
                                pl={1}
                                fontWeight="normal"
                            >
                                Download
                            </Text>
                        </Button>
                    </Flex>
                </GridItem>
            </Grid>
            <Suggestions />
        </div>
    );
};

export default Photo;

export async function getServerSideProps(req) {
    const session = await getSession(req);
    console.log('session: ', session);

    if (!session) {
        return {
            redirect: {
                destination: '/unauthorised',
                permanent: true,
            },
        };
    }

    return {
        props: {
            photo: req.params.id,
        },
    };
}
