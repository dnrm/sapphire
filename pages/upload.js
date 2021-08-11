import React, { useCallback, useState } from 'react';
import Navbar from '../components/Navbar';
import { Divider, Heading, Stack, Input, Flex, Image, Button } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';

const Upload = () => {
    const [image, setImage] = useState();

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        setImage(URL.createObjectURL(acceptedFiles[0]));
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
        <>
            <Navbar />
            <Divider mb="8" />
            <Stack px={8} id="main">
                <Heading fontWeight="regular" mb={8}>
                    Upload a photo
                </Heading>
                <Flex
                    borderColor="gray.300"
                    h={'70vh'}
                    w={'full'}
                    borderWidth={2}
                    {...getRootProps()}
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    background={isDragActive ? 'telegram.100' : 'white'}
                    textColor={isDragActive ? 'gray.500' : 'gray.500'}
                    rounded="2xl"
                >
                    <Input {...getInputProps()} display="none" />
                    {image ? (
                        <>
                            <Flex
                                p={0}
                                overflow="hidden"
                                rounded="2xl"
                                h={'100%'}
                            >
                                <Image
                                    src={image}
                                    alt="Image to be uploaded"
                                    objectFit="cover"
                                />
                            </Flex>
                        </>
                    ) : (
                        <Stack px={25} py={50} dir="column">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <Heading fontWeight="regular">Upload image</Heading>
                        </Stack>
                    )}
                </Flex>
                {image ? (
                    <Stack pb={16}>
                        <Divider my={8} />
                        <Button variant="solid" colorScheme="teal">Upload</Button>
                    </Stack>
                ) : null}
            </Stack>
        </>
    );
};

export default Upload;
