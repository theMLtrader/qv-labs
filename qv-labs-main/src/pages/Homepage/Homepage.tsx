import React from 'react';
import {
    Box,
    Center,
    HStack,
    Image,
    StackDivider,
    Text,
} from "@chakra-ui/react";

const Homepage = () => {
    return (
        <Box mb={10}>
            <Box mt={10}>
                <Center>
                    <Image loading="lazy" src="./qv-labs.jpeg"/>
                </Center>
            </Box>

            <Box mt={10}>
                <Center>
                    <Text fontSize="30px">About Us</Text>
                </Center>
            </Box>

            <Box mt={20} px={60}>
                <Center>
                    <HStack divider={<StackDivider borderColor='gray.200'/>}
                            spacing={4}>
                        <Box>
                            <Text fontSize="24px" pr={15}>Analytics Born in the cloud. Built for outperformance.</Text>
                            <Text mt={5}>QVL gets technological / database hurdles out of your way. QVL provides custom
                                analytics and research.</Text>
                        </Box>
                        <Box>
                            <Text fontSize="24px" pr={15}>Real-time research: Bayesian Updating</Text>
                            <Text mt={5}>Modules are updated LIVE according to Bayes non-parametric approach </Text>
                        </Box>
                        <Box>
                            <Text fontSize="24px" pr={15}>API-powered, open platform</Text>
                            <Text mt={5}>QVL modules are built for plug-and-play integrations with other solutions,
                                allowing Asset Managers to connect with ease. </Text>
                        </Box>
                    </HStack>
                </Center>

            </Box>

            <Box mt={100} px={48}>
                <Text>Copyright © 2022 QV-LABS - All Rights Reserved.</Text>
            </Box>



        </Box>
    );
}

export default Homepage;