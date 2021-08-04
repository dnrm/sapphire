import React from 'react'
import { Box, Image } from '@chakra-ui/react'

const Photo = (props) => {
    return (
        <Box h="full" w="full">
            <Image src={props.src} alt="Cute picture" />
        </Box>
    )
}

export default Photo