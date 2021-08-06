import React from 'react';
import { Grid } from '@chakra-ui/react';
import Photo from './Photo';

const Gallery = () => {
    return (
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
    );
};

export default Gallery;
