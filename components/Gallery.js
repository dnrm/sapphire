import React from 'react';
import { Grid, Stack, Heading, Flex, Text, Button } from '@chakra-ui/react';
import Photo from './Photo';
import { useSession } from 'next-auth/client';
import Link from 'next/link';

const Gallery = () => {
    const [session] = useSession();

    return session ? (
        <Grid
            px={8}
            my={8}
            templateColumns={{ base: 'auto', md: 'repeat(2, 1fr)' }}
            gap="2"
            width="full"
        >
            <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
            <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
            <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
            <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
            <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
            <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
            <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
            <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
            <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
            <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
            <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
            <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
            <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
            <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
            <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
            <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
            <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
            <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
            <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
            <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
            <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
            <Photo src="https://images.unsplash.com/photo-1605947464625-316923642808"></Photo>
            <Photo src="https://images.unsplash.com/photo-1611635473151-88f447ed3140"></Photo>
            <Photo src="https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e"></Photo>
        </Grid>
    ) : (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            py={60}
            m={8}
            bgImage={'/unauthorised-bg.png'}
            bgRepeat="no-repeat"
            bgSize="cover"
        >
            <Flex
                h={32}
                w={'full'}
                alignItems="center"
                justifyContent="center"
                opacity="1"
            >
                <Flex h={28} w={28} textColor="gray.600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Flex>
            </Flex>
            <Heading
                textColor="gray.600"
                textAlign="center"
                fontWeight="regular"
            >
                You are not Sofi or Dani &gt;:c
            </Heading>
            <Text textColor="gray.600" textAlign="center" fontWeight="regular">
                ...or you are not logged in &lt;3
            </Text>
            <Link href="/login">
                <a textAlign="center">
                    <Button mt={2} colorScheme="blue" variant="outline">Log In</Button>
                </a>
            </Link>
        </Flex>
    );
};

export default Gallery;
