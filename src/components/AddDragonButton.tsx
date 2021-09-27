import { Button, Icon, useDisclosure } from '@chakra-ui/react';
import { GiEggEye } from 'react-icons/gi';
import AddOrEditDragonModal from './AddOrEditDragonModal';

const AddDragonButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        bg="primary"
        color="yellow.100"
        _hover={{ backgroundColor: 'brown.700', color: 'yellow.200' }}
        _active={{ backgroundColor: 'brown.900' }}
        onClick={onOpen}
      >
        <Icon as={GiEggEye} mr="2" w={6} h={6} />
        Add a new dragon
      </Button>
      <AddOrEditDragonModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};

export default AddDragonButton;
