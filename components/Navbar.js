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
    Link as Hyperlink,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useSession } from 'next-auth/client';
import { useColorMode } from '@chakra-ui/react'

const Navbar = (props) => {
    const [session] = useSession();
    const router = useRouter();

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex px={5} py={3} justifyContent="space-between" alignItems="center">
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
                                    textColor="gray.700"
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
                    <Button onClick={toggleColorMode} p={3} rounded={'md'} ml={4} alignItems="center" justifyContent="center" bgColor="gray.600">
                        { colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
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
                    <Button onClick={toggleColorMode} p={3} rounded={'md'} ml={2} alignItems="center" justifyContent="center" bgColor="gray.600">
                        { colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            )}
        </Flex>
    );
};

export default Navbar;
