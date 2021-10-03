import { Flex, Box, Heading } from '@chakra-ui/react';
import React from 'react';
import CampFireAnimation from '../components/CampFireAnimation';

const Custom404 = () => {
  return (
    <Flex
      py="6"
      width="100%"
      px={{ base: '4', lg: '8' }}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box mx="auto">
        <Heading
          textAlign="center"
          size="md"
          fontWeight="extrabold"
          marginY="3"
          marginBottom="10"
        >
          You seem lost, friend...
        </Heading>
        <CampFireAnimation />
      </Box>
    </Flex>
  );
};

export default Custom404;
