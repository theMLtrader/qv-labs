import React from 'react';
import {Box, Center, Link, Text} from "@chakra-ui/react";

const ContactUs = () => {
    return (
        <Box px={48} mt={20}>
            <Center>
                <Text fontSize='24px' fontWeight={'semibold'}>Contact Us</Text>
            </Center>

            <Box mt={10}>
                <Center>
                    <Text>
                        Let us tailor a service package that meets your needs. Tell us a little about your business, and we will get back to you with some ideas as soon as possible.
                    </Text>
                </Center>
            </Box>

            <Box mt={10}>
                <Center>
                    <Text fontWeight={'semibold'}>QV-Labs</Text>
                </Center>

                <Center mt={10}>
                    <Link color="blue.500" href="mailto:luca@qv-labs.com">Send Email to luca@qv-labs.com</Link>
                </Center>
            </Box>
        </Box>
    )
}

export default ContactUs;