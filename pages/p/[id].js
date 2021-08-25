import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import {
    Divider,
    Stack,
    Heading,
    Grid,
    Skeleton,
    Image,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Photo = () => {
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
                h={'100vh'}
                gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: '1fr 3fr' }}
                p={8}
                gap={4}
            >
                <Skeleton isLoaded={!!url}>
                    <Image alt="Image" src={url} w={'full'}></Image>
                </Skeleton>
                <Stack>
                    <Heading>{router.query.id}</Heading>
                </Stack>
            </Grid>
        </div>
    );
};

export default Photo;
