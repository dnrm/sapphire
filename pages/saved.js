import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { Divider } from '@chakra-ui/react';
import useSWR from 'swr';
import { Grid, Stack } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useImageContext } from '../context/Images';
import { useRouter } from 'next/router';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Saved = ({ photo }) => {
    console.log(photo);
    const { data, error } = useSWR('/api/saved', fetcher);

    const [url, setUrl] = useState();

    const { urls } = useImageContext();

    console.log(data);

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
            <Grid
                px={{ base: 4, md: 8 }}
                my={8}
                templateColumns={{ base: 'auto', md: 'repeat(4, 1fr)' }}
                gap="2"
                width="full"
            >
                {data
                    ? data.saved.map((i) => {
                          return (
                              <motion.div layoutId="image" key={i._id}>
                                  <Stack>
                                      <Link href={`/p/${i.Key}`} key={i.Key}>
                                          <a>
                                              <Image
                                                  height="100"
                                                  width="100"
                                                  objectFit="cover"
                                                  layout="responsive"
                                                  src={i}
                                                  loading="lazy"
                                                  alt="Cute photo"
                                                  placeholder="blur"
                                                  blurDataURL="/placeholder.png"
                                              />
                                          </a>
                                      </Link>
                                  </Stack>
                              </motion.div>
                          );
                      })
                    : null}
            </Grid>
        </>
    );
};

export default Saved;
