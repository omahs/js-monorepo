import { EditIcon } from '@chakra-ui/icons';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useContract } from '../../../hooks/useContract';
import { useState } from 'react';
import { useContractWrite } from 'wagmi';
import { AddressInput } from './AddressInput';
import { contracts } from '../../../utils/constants';
import { useParams } from '@snx-v3/useParams';

export const TransferOwnership = () => {
  const { isOpen: isOwnerOpen, onOpen: onOwnerOpen, onClose: onOwnerClose } = useDisclosure();
  const params = useParams();
  const [address, setAddress] = useState('');

  const accountProxy = useContract(contracts.ACCOUNT_PROXY);
  const { write, isLoading } = useContractWrite({
    mode: 'recklesslyUnprepared',
    address: accountProxy?.address,
    abi: accountProxy?.abi,
    functionName: 'approve',
    args: [address, params.accountId],
  });

  return (
    <>
      <EditIcon color="cyan.500" onClick={onOwnerOpen} mx="2" />
      <Modal size="lg" isOpen={isOwnerOpen} onClose={onOwnerClose}>
        <ModalOverlay />
        <ModalContent
          bg="black"
          color="white"
          borderColor="gray.800"
          borderWidth="2px"
          borderRadius="2"
        >
          <ModalHeader>Transfer Account Ownership</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="lg">Transferring to</Text>
            <Text fontSize="md" pb="3">
              Enter the wallet address that you would like to transfer ownership too. This cannot be
              undone.
            </Text>
            <AddressInput
              address={address}
              onChange={(addressVal: string) => setAddress(addressVal)}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onOwnerClose} variant="link" padding="4">
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={async () => {
                if (write) {
                  await write();
                }
                onOwnerClose();
              }}
              isLoading={isLoading}
              ml={3}
            >
              Transfer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
