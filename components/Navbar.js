import React from 'react';
import Link from 'next/link';
import {
    Flex,
    Heading,
    Badge,
    Button,
    Stack,
    Avatar,
    Text,
    Link as Hyperlink,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useSession } from 'next-auth/client';
import { useColorMode } from '@chakra-ui/react'

const Navbar = () => {
    const [session] = useSession();

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex px={5} py={3} justifyContent="space-between" alignItems="center" h={'16'}>
            <Link href="/">
                <a>
                    <Stack direction="row" alignItems="center">
                        <Heading
                            fontWeight="regular"
                            fontSize={{ base: '1em', md: '1.5em' }}
                        >
                            Cute Photos
                        </Heading>
                        <Badge fontSize={{ base: '0.5em', md: '0.7em' }}>
                            With Sofi and Dani
                        </Badge>
                    </Stack>
                </a>
            </Link>
            {session ? (
                <Flex dir="row" alignItems="center" justifyContent="center">
                    <Flex justifyContent="center" alignItems="center" mr={6}>
                        <Link href="/upload">
                            <a>
                                <Hyperlink
                                    fontSize={{ base: '0.8em', md: '1em' }}
                                >
                                    Upload
                                </Hyperlink>
                            </a>
                        </Link>
                    </Flex>
                    <Link href="/profile">
                        <a>
                            <Flex justifyContent="center" alignItems="center">
                                <Text
                                    fontSize={{ base: '0.8em', md: '1em' }}
                                    mr={4}
                                    textColor="gray"
                                >
                                    {session.user.email}
                                </Text>
                                <Avatar src={session.user.image} />
                            </Flex>
                        </a>
                    </Link>
                </Flex>
            ) : (
                <Flex alignItems="center" justifyContent="center">
                    <Link href="/login">
                        <a>
                            <Button
                                boxShadow="xl"
                                variant="solid"
                                colorScheme="teal"
                            >
                                Log In
                            </Button>
                        </a>
                    </Link>
                </Flex>
            )}
        </Flex>
    );
};

export default Navbar;
