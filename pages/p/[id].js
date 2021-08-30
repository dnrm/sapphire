import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import {
    Divider,
    Heading,
    Grid,
    Skeleton,
    Image,
    Button,
    Flex,
    Icon,
    Text,
    Stack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Photo = () => {
    const [likes, setLikes] = useState(0);
    const [favourites, setFavourites] = useState(0);
    const [saved, setSaved] = useState(0);
    const [url, setUrl] = useState();
    const router = useRouter();

    useEffect(() => {
        const get = async () => {
            const response = await fetch('/api/get-url', {
                method: 'POST',
                body: JSON.stringify({
                    key: router.query.id,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const { url } = await response.json();
            setUrl(url);
        };

        get();
    }, [router.query.id]);

    return (
        <div>
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
                <Skeleton isLoaded={!!url}>
                    <Image alt="Image" src={url}></Image>
                </Skeleton>
                <Divider py={2} orientation="vertical" />
                <Stack>
                    <Heading>Details</Heading>
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
                            <Icon viewBox="0 0 20 20" color="white">
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
                            <Text pl={1}>{likes}</Text>
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
                            <Icon viewBox="0 0 20 20" color="white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </Icon>
                            <Text pl={1}>{favourites}</Text>
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
                            <Icon viewBox="0 0 20 20" color="white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                </svg>
                            </Icon>
                            <Text pl={1}>{saved}</Text>
                        </Button>
                    </Flex>
                </Stack>
            </Grid>
        </div>
    );
};

export default Photo;
