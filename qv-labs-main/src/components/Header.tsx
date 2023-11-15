import React from 'react';
import {
    Badge,
    Box, Button,
    Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading, Link, Stack,
    useDisclosure
} from "@chakra-ui/react";
import {HiOutlineMenu} from "react-icons/hi";
import {NavLink} from "react-router-dom";
import { useMoralis } from 'react-moralis';

export const Header = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const { authenticate, user } = useMoralis();

    return (
        <Box mt={10}>
            <Flex justifyContent={'space-around'} alignItems={'center'}>
                <HiOutlineMenu onClick={onOpen} fontSize="40px" cursor={'pointer'}/>
                <Heading fontSize="50px">QV-Labs</Heading>
                {!user && (
                    <Button onClick={() => authenticate()}>Connect Wallet</Button>
                )}
                {user && (
                    <Badge>{user?.get('ethAddress')}</Badge>
                )}
            </Flex>


            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton fontSize='20px'/>
                    <DrawerHeader/>

                    <DrawerBody mt={20}>
                        <Stack spacing={5}>
                            <Link as={NavLink} to="/" fontSize='24px'>
                                Home
                            </Link>
                            <Link as={NavLink} to="/contact-us" fontSize='24px'>
                                Contact Us
                            </Link>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}