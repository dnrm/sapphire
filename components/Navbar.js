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
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Icon,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useSession } from 'next-auth/client';
import { useColorMode } from '@chakra-ui/react';
import { signOut } from 'next-auth/client';

const Navbar = () => {
    const [session] = useSession();

    return (
        <Flex
            px={5}
            py={3}
            justifyContent="space-between"
            alignItems="center"
            h={'16'}
        >
            <Link href="/">
                <a>
                    <Stack direction="row" alignItems="center">
                        <Heading
                            fontWeight="regular"
                            fontSize={{ base: '1em', md: '1.5em' }}
                        >
                            Cute Photos
                        </Heading>
                        <Badge
                            fontSize={{ base: '0.5em', md: '0.7em' }}
                            display={{ base: 'none', md: 'inline' }}
                        >
                            With Sofi and Dani
                        </Badge>
                    </Stack>
                </a>
            </Link>
            {session ? (
                <Flex dir="row" alignItems="center" justifyContent="center">
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            <Flex justifyContent="center" alignItems="center">
                                <Avatar
                                    src={session.user.image}
                                    h={8}
                                    w={8}
                                    mr={2}
                                />
                                <Text
                                    fontSize={{
                                        base: '0.8em',
                                        md: '0.9em',
                                    }}
                                    mr={4}
                                    textColor="gray.300"
                                    display={{
                                        base: 'none',
                                        md: 'block',
                                    }}
                                >
                                    {session.user.name}
                                </Text>
                            </Flex>
                        </MenuButton>
                        <MenuList>
                            <MenuItem py={0}>
                                <Link href="/profile">
                                    <a>
                                        <Flex
                                            justifyContent="center"
                                            alignItems="center"
                                            px={0}
                                            py={2}
                                        >
                                            <Icon
                                                stroke="gray.300"
                                                mr={1}
                                                h={5}
                                                w={5}
                                            >
                                                <svg fill="none">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </Icon>
                                            <Text
                                                fontSize={{
                                                    base: '0.8em',
                                                    md: '0.9em',
                                                }}
                                                mr={4}
                                                textColor="gray.300"
                                                display={{
                                                    base: 'none',
                                                    md: 'block',
                                                }}
                                            >
                                                Your profile
                                            </Text>
                                        </Flex>
                                    </a>
                                </Link>
                            </MenuItem>
                            <MenuItem py={0}>
                                <Link href="/saved">
                                    <a>
                                        <Flex
                                            justifyContent="center"
                                            alignItems="center"
                                            px={0}
                                            py={2}
                                        >
                                            <Icon
                                                stroke="gray.300"
                                                mr={1}
                                                h={5}
                                                w={5}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                                    />
                                                </svg>
                                            </Icon>
                                            <Text
                                                fontSize={{
                                                    base: '0.8em',
                                                    md: '0.9em',
                                                }}
                                                mr={4}
                                                textColor="gray.300"
                                                display={{
                                                    base: 'none',
                                                    md: 'block',
                                                }}
                                            >
                                                Saved
                                            </Text>
                                        </Flex>
                                    </a>
                                </Link>
                            </MenuItem>
                            <MenuItem py={0}>
                                <Link href="/upload">
                                    <a>
                                        <Flex
                                            justifyContent="center"
                                            alignItems="center"
                                            px={0}
                                            py={2}
                                        >
                                            <Icon
                                                stroke="gray.300"
                                                mr={1}
                                                h={5}
                                                w={5}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                                    />
                                                </svg>
                                            </Icon>
                                            <Text
                                                fontSize={{
                                                    base: '0.8em',
                                                    md: '0.9em',
                                                }}
                                                mr={4}
                                                textColor="gray.300"
                                                display={{
                                                    base: 'none',
                                                    md: 'block',
                                                }}
                                            >
                                                Upload
                                            </Text>
                                        </Flex>
                                    </a>
                                </Link>
                            </MenuItem>
                            <MenuItem py={0} onClick={signOut}>
                                <Flex
                                    justifyContent="center"
                                    alignItems="center"
                                    px={0}
                                    py={2}
                                >
                                    <Icon stroke="gray.300" mr={1} h={5} w={5}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                            />
                                        </svg>
                                    </Icon>
                                    <Text
                                        fontSize={{
                                            base: '0.8em',
                                            md: '0.9em',
                                        }}
                                        mr={4}
                                        textColor="gray.300"
                                        display={{
                                            base: 'none',
                                            md: 'block',
                                        }}
                                    >
                                        Log out
                                    </Text>
                                </Flex>
                            </MenuItem>
                        </MenuList>
                    </Menu>
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
