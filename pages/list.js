import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { Divider, ListItem, List, ListIcon } from '@chakra-ui/react';
import useSWR from 'swr';
import { Stack } from '@chakra-ui/layout';
import Link from 'next/link';
import { AttachmentIcon } from '@chakra-ui/icons';
import { useImageContext } from '../context/Images';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Saved = ({ photo }) => {
    console.log(photo);
    // const { data, error } = useSWR('/api/saved', fetcher);

    const [url, setUrl] = useState();

    const { urls } = useImageContext();

    return (
        <>
            <Head>
                <title>Cute Photos | sapphire</title>
                <link
                    rel="shortcut icon"
                    href="/heart-icon.png"
                    type="image/x-icon"
                />
                <meta
                    name="description"
                    content="Cute photos of Sofi and Dani"
                />
            </Head>
            <Navbar />
            <Divider />
            <Stack>
                <List spacing={3} p={8}>
                    {urls &&
                        urls.map((url) => {
                            return (
                                <ListItem
                                    key={url.Key}
                                    display={'flex'}
                                    justifyContent={'start'}
                                    alignItems={'center'}
                                    fontSize={'lg'}
                                >
                                    <ListIcon
                                        as={AttachmentIcon}
                                        color="white"
                                    />
                                    <Link href={`/p/${url.Key}`}>
                                        {url.Key}
                                    </Link>
                                </ListItem>
                            );
                        })}
                </List>
            </Stack>
        </>
    );
};

export default Saved;
