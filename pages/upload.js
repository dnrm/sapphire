import React, { useCallback, useState } from 'react';
import Navbar from '../components/Navbar';
import {
    Divider,
    Heading,
    Stack,
    Input,
    Flex,
    Image,
    Button,
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { useToasts } from 'react-toast-notifications';
import router from 'next/router';

const Upload = () => {
    const [image, setImage] = useState();
    const [file, setFile] = useState();
    const { addToast } = useToasts();

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        setImage(URL.createObjectURL(acceptedFiles[0]));
        setFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    const uploadImage = async (e) => {
        e.preventDefault();
        console.log(image);

        try {
            const res = await fetch('/api/upload-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    file: file.name,
                }),
            });

            const { url, fields } = await res.json();

            const data = new FormData();

            console.log(file.name);

            Object.entries({ ...fields, file }).forEach(([key, value]) => {
                data.append(key, value);
            });

            console.log(data);

            const upload = await fetch(url, {
                method: 'POST',
                body: data,
            });

            if (upload.ok) {
                addToast('Image uploaded!', {
                    appearance: 'success',
                    autoDismiss: true,
                });

                router.push('/')
            } else {
                addToast("Oh no! Couldn't upload image", {
                    appearance: 'error',
                    autoDismiss: true,
                });
            }
        } catch (e) {
            console.log(e);
            addToast("Oh no! Couldn't upload image", {
                appearance: 'error',
                autoDismiss: true,
            });
            router.push('/')
        }
    };

    return (
        <>
            <Navbar />
            <Divider mb="8" />
            <Stack px={8} id="main">
                <form onSubmit={uploadImage}>
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
                                <Heading fontWeight="regular">
                                    Upload image
                                </Heading>
                            </Stack>
                        )}
                    </Flex>
                    {image ? (
                        <Stack pb={16}>
                            <Divider my={8} />
                            <Button
                                variant="solid"
                                type="submit"
                                colorScheme="teal"
                            >
                                Upload
                            </Button>
                        </Stack>
                    ) : null}
                </form>
            </Stack>
        </>
    );
};

export default Upload;
