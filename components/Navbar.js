import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Flex, Heading, Badge, Button, Stack } from '@chakra-ui/react';
import { useSession } from 'next-auth/client';

const Navbar = (props) => {
    const [session] = useSession();
    const router = useRouter()

    return (
        <Flex px={8} py={8} justifyContent="space-between" alignItems="center">
            <Link href="/">
                <a>
                    <Stack direction="row" alignItems="center">
                        <Heading fontWeight="regular">Cute Photos</Heading>
                        <Badge>With Sofi and Dani</Badge>
                    </Stack>
                </a>
            </Link>
            {session ? null : (
                <Link href="/login">
                    <a>
                        <Button
                            boxShadow="xl"
                            variant="solid"
                            colorScheme="teal"
                            color="white"
                        >
                            Log In
                        </Button>
                    </a>
                </Link>
            )}
        </Flex>
    );
};

export default Navbar;
