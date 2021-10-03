import { useContext } from 'react';
import Logo from '../components/Logo';
import DragonList from '../components/DragonList';
import AddDragonButton from '../components/AddDragonButton';
import { AuthContext } from '../contexts/AuthContext';

import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Flex,
  Tooltip,
  Tag,
} from '@chakra-ui/react';
import * as React from 'react';
import { LoginForm } from '../components/LoginForm';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

export default function Home() {
  return (
    <Flex
      bg="yellow.200"
      minH="100vh"
      py="6"
      px={{ base: '4', lg: '8' }}
      alignItems="center"
    >
      <Box maxW="md" mx="auto">
        <Flex justifyContent="center">
          <Logo />
        </Flex>
        <Heading
          textAlign="center"
          size="md"
          fontWeight="extrabold"
          marginY="3"
        >
          <Tag fontWeight="bold" maxW="md" mx="auto" py="2">
            <Flex flexWrap="wrap" justifyContent="center">
              <Text whiteSpace="nowrap" wordBreak="keep-all">
                You need&nbsp;
              </Text>
              <Text
                as="span"
                color="primary"
                textDecoration="underline"
                _hover={{ cursor: 'pointer' }}
              >
                <Tooltip
                  hasArrow
                  label="You can use any information for login, but don't tell anyone"
                  bg="primary"
                  color="black"
                  shadow="dark-lg"
                >
                  permission
                </Tooltip>
              </Text>
              <Text whiteSpace="nowrap" wordBreak="keep-all">
                &nbsp;to get close to the dragons
              </Text>
            </Flex>
          </Tag>
        </Heading>
        <Box
          bg="yellow.100"
          py="8"
          px={{ base: '4', md: '10' }}
          shadow="base"
          rounded={{ sm: 'lg' }}
        >
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['dragonsLair.token']: token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: '/dragons',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
