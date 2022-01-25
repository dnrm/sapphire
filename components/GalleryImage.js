import React, { useState } from 'react';
import { Skeleton, Link as StyledLink, Stack, Image } from '@chakra-ui/react';
import Link from 'next/link';

const GalleryImage = ({ src, address }) => {
    const [showImage, setShowImage] = useState(false);

    const onImageLoaded = () => {
        setShowImage(true);
    };

    return (
        <Skeleton isLoaded={showImage}>
            <Stack w="full" display={'block'} h={'96'}>
                <Link href={`/p/${address}`} key={address} passHref>
                    <StyledLink>
                        <Image
                            src={src}
                            loading="lazy"
                            alt="Cute photo"
                            height={'full'}
                            w={'full'}
                            objectFit={'cover'}
                            onLoad={onImageLoaded}
                        />
                    </StyledLink>
                </Link>
            </Stack>
        </Skeleton>
    );
};

export default GalleryImage;
