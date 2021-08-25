import React from 'react';
import { Button } from '@chakra-ui/button';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/color-mode';

const DarkModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Button
            onClick={toggleColorMode}
            p={3}
            rounded={'md'}
            m={4}
            alignItems="center"
            justifyContent="center"
            bgColor={colorMode === "light" ? "gray.200" : "gray.600"}
            position={'fixed'}
            bottom={0}
            right={0}
            fontSize="1.2em"
            h={14}
            w={14}
        >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
};

export default DarkModeToggle;
