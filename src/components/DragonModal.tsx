import { Modal, ModalOverlay, UseDisclosureProps } from '@chakra-ui/react';
import AddDragonModalContent from './AddDragonModalContent';
import EditDragonModalContent from './EditDragonModalContent';
import { MagicDragon } from './DragonCard';

interface IDragonModal extends UseDisclosureProps {
  mode?: string;
  dragon?: MagicDragon;
}

export default function DragonModal(props: IDragonModal) {
  const { mode, isOpen, onOpen, onClose, dragon } = props;

  return (
    <>
      <Modal
        blockScrollOnMount={true}
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        {mode === 'ADD' && (
          <AddDragonModalContent
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
        )}
        {mode === 'EDIT' && (
          <EditDragonModalContent
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            dragon={dragon}
          />
        )}
      </Modal>
    </>
  );
}
