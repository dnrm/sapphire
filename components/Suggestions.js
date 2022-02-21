import React, { useState, useEffect } from 'react';
import GalleryImage from './GalleryImage';
import { Grid, Stack, Heading, Divider } from '@chakra-ui/react';

import { useImageContext } from '../context/Images';
import { useRouter } from 'next/router';

const Suggestions = () => {
    const { urls } = useImageContext();
    const [randomElements, setRandomElements] = useState([]);
    const router = useRouter();

    useEffect(() => {
        console.log(randomElements.length);

        if (urls) {
            if (randomElements.length < 4) {
                setRandomElements([]);
                getRandom(urls);
            } else {
                setRandomElements([]);
                getRandom(urls);
            }
        }
    }, [router.query.id]);

    const getRandom = (urls) => {
        const temp = [];
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * urls.length);
            temp.push(urls[randomIndex]);
        }
        console.log(temp);
        setRandomElements(temp.slice(0, 4));
    };

    return (
        <Stack px={{ base: 4, md: 8 }} pb={10}>
            <Heading>Suggested photos</Heading>
            <Divider />
            <Grid
                my={8}
                templateColumns={{
                    base: 'auto',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(4, 1fr)',
                }}
                gap="2"
                width="full"
            >
                {randomElements &&
                    randomElements.map((i) => {
                        return (
                            <GalleryImage
                                key={i.Key}
                                address={i.Key}
                                src={i.URL}
                            />
                        );
                    })}
            </Grid>
        </Stack>
    );
};

export default Suggestions;
