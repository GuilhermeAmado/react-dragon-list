import {} from '@chakra-ui/react';
import {
  Avatar,
  Box,
  Button,
  Flex,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';

const Dragon = ({ dragon }) => {
  const { createdAt, name, type, histories, id, avatar } = dragon;
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      rounded="md"
      padding="8"
      position="relative"
      bg={useColorModeValue('white', 'gray.700')}
      shadow={{ md: 'base' }}
    >
      <Box
        position="absolute"
        inset="0"
        height="20"
        bg="primary"
        roundedTop="inherit"
      />
      <Avatar size="xl" name={name} src={avatar} />
      <Text marginTop="2">{dragon.name}</Text>
      <Button marginTop="2">See details</Button>
    </Flex>
  );
};

export default Dragon;
