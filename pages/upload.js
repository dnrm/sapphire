import React, { useCallback } from 'react';
import Navbar from '../components/Navbar';
import { Divider, Heading, Stack, Input, Flex } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';

const Upload = () => {
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
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
                    px={25}
                    py={50}
                    borderColor="gray.300"
                    h={64}
                    w={'full'}
                    borderWidth={2}
                    {...getRootProps()}
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    background={isDragActive ? 'telegram.100' : 'white'}
                    textColor={isDragActive ? "gray.500" : "gray.500"}
                    rounded="2xl"
                >
                    <Input {...getInputProps()} display="none" />
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
                </Flex>
            </Stack>
        </>
    );
};

export default Upload;
