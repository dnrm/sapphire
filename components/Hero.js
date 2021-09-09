import React from 'react';
import { Text, Stack, Avatar, Flex, AvatarBadge } from '@chakra-ui/react';

const Hero = () => {
    return (
        <Stack p={16}>
            <Flex justifyContent="center" mb={4} alignItems="center" gap="4">
                <Flex
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Avatar
                        name="Sofia Hinojosa"
                        borderColor="gray.200"
                        borderRadius="full"
                        borderWidth={{ base: '4px', md: '8px' }}
                        h={{ base: '32', md: '56' }}
                        w={{ base: '32', md: '56' }}
                        m="2"
                        src="https://res.cloudinary.com/dnrm/image/upload/c_fill,g_face,h_750,r_0,w_750/v1631149875/sofi.jpg"
                    >
                        <AvatarBadge
                            borderColor="papayawhip"
                            bg="tomato"
                            boxSize={{ base: '3em', md: '4em' }}
                            p={{ base: '3', md: '4' }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </AvatarBadge>
                    </Avatar>
                    <Text>Sofi</Text>
                </Flex>
                <Flex
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Avatar
                        name="Daniel Medina"
                        borderColor="gray.200"
                        borderRadius="full"
                        borderWidth={{ base: '4px', md: '8px' }}
                        h={{ base: '32', md: '56' }}
                        w={{ base: '32', md: '56' }}
                        m="2"
                        src="https://res.cloudinary.com/dnrm/image/upload/c_fill,g_face,h_750,r_0,w_750/v1631149875/dani.jpg"
                    >
                        <AvatarBadge
                            borderColor="papayawhip"
                            bg="tomato"
                            boxSize={{ base: '3em', md: '4em' }}
                            p={{ base: '3', md: '4' }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </AvatarBadge>
                    </Avatar>
                    <Text>Dani</Text>
                </Flex>
            </Flex>
            <Text
                textColor="gray.400"
                textAlign="center"
                fontStyle="italic"
                fontSize={{ base: '1.5em', md: '2em' }}
            >
                Being the cutest pair of people, we&apos;re bound to have photos
                of our little faces.
            </Text>
        </Stack>
    );
};

export default Hero;
