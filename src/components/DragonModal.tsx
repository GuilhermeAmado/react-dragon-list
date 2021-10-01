import { Modal, ModalOverlay } from '@chakra-ui/react';
import AddDragonModalContent from './AddDragonModalContent';
import EditDragonModalContent from './EditDragonModalContent';

export default function DragonModal({ mode, isOpen, onOpen, onClose, dragon }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
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
