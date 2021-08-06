import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    Flex,
    Heading,
    Badge,
    Button,
    Stack,
    Avatar,
    Text,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/client';

const Navbar = (props) => {
    const [session] = useSession();
    const router = useRouter();

    return (
        <Flex px={5} py={5} justifyContent="space-between" alignItems="center">
            <Link href="/">
                <a>
                    <Stack direction="row" alignItems="center">
                        <Heading fontWeight="regular">Cute Photos</Heading>
                        <Badge>With Sofi and Dani</Badge>
                    </Stack>
                </a>
            </Link>
            {session ? (
                <Flex dir="row">
                    <Link href="/profile">
                        <a>
                            <Flex justifyContent="center" alignItems="center">
                                <Text fontSize={{ base: '0.8em', md: '1em' }} mr={4} textColor="gray">{session.user.email}</Text>
                                <Avatar src={session.user.image} />
                            </Flex>
                        </a>
                    </Link>
                </Flex>
            ) : (
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
