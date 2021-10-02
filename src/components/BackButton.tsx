import { Button, Icon, ButtonProps } from '@chakra-ui/react';
import { GiReturnArrow } from 'react-icons/gi';

const BackButton = (props: ButtonProps) => {
  return (
    <Button
      bg="primary"
      color="yellow.100"
      _hover={{ backgroundColor: 'brown.700', color: 'yellow.200' }}
      _active={{ backgroundColor: 'brown.900' }}
      {...props}
    >
      <Icon as={GiReturnArrow} mr="2" w={6} h={6} />
      Back to safety
    </Button>
  );
};

export default BackButton;
