import {} from '@chakra-ui/react';
import {
  Avatar,
  Box,
  Button,
  Flex,
  useColorModeValue,
  Text,
  Badge,
} from '@chakra-ui/react';
import parseDate from '../helpers/parseDate';

const Dragon = ({ dragon }) => {
  const { createdAt, name, type, histories, id, avatar } = dragon;
  // console.log('dragon.createdAt', parseDate(createdAt));
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
        bgGradient="linear(to-br, primary, brown.700)"
        roundedTop="inherit"
      />
      <Avatar
        size="2xl"
        name={name}
        src={avatar}
        borderWidth={3}
        borderColor="primary"
        boxShadow="xl"
      />
      <Text marginTop="2" textAlign="center" fontWeight="bold" fontSize="lg">
        {dragon.name}
      </Text>
      <Badge marginTop="2" backgroundColor="yellow.200">
        Type: {dragon.type}
      </Badge>
      <Button my="4">See details</Button>
      <Text fontSize="10px">
        <Text as="span" fontWeight="bold">
          Created at&nbsp;
        </Text>
        {parseDate(dragon.createdAt)}
      </Text>
    </Flex>
  );
};

export default Dragon;
