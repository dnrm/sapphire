import { Grid, Text, Stack } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
    return (
        <div className="gradient">
            <Head>
                <title>Cute Photos | sapphire</title>
                <link
                    rel="shortcut icon"
                    href="/heart-icon.png"
                    type="image/x-icon"
                />
                <meta
                    name="description"
                    content="This website has closed... Things come and go in life, and this is one of them. Thank you for your support."
                />
            </Head>
            <Grid
                placeItems={'center'}
                textColor="gray.400"
                textAlign="center"
                fontWeight={'normal'}
                fontStyle="italic"
                height={'100vh'}
                fontSize={{ base: '1.5em', md: '2em' }}
            >
                <Stack>
                    <Text px={5}>
                        This website has closed... Things come and go in life,
                        and this is one of them. Thank you for your support.
                    </Text>
                    <Text fontSize={{ base: 'sm', lg: 'lg' }}>Love, Dani</Text>
                </Stack>
            </Grid>
        </div>
    );
}
