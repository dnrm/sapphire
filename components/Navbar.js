import React from 'react';
import Link from 'next/link'
import { Flex, Heading, Badge, Button, Stack } from "@chakra-ui/react"

const Navbar = () => {
    return (
        <Flex px={8} py={8} justifyContent="space-between" alignItems="center">
            <Stack direction="row" alignItems="center">
                <Heading fontWeight="regular">Cute Photos</Heading>
                <Badge>With Sofi and Dani</Badge>
            </Stack>
            <Link href="/login">
                <Button boxShadow="xl" variant="solid" colorScheme="teal" color="white">Log In</Button>
            </Link>
        </Flex>
    )
}

export default Navbar;