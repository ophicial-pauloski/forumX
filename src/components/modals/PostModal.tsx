import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/indexSlice";

export const PostModal = () => {
  const dispatch = useDispatch();
  const { modalIsOpen } = useSelector((state: any) => state.indexSlice);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Modal
        size={"3xl"}
        isOpen={modalIsOpen}
        onClose={() => dispatch(closeModal())}
      >
        <ModalOverlay />
        <ModalContent zIndex={5}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody border={"1px"} borderColor='#e4e4e4' mx={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            laudantium repudiandae possimus. Voluptate dicta earum mollitia
            repudiandae fugit, facere ipsam similique vel non, consequuntur
            aperiam, rerum fuga deleniti blanditiis doloremque. Tempore eum
            obcaecati culpa quis non quia dolorum delectus atque, nostrum
            expedita praesentium odio corrupti odit. Laborum cum minus fugit
            vero perspiciatis a non, dolor corrupti eos omnis corporis nisi fuga
            modi assumenda temporibus facere excepturi, doloremque deleniti
            totam reprehenderit blanditiis natus commodi nobis. Ducimus
            assumenda quisquam pariatur quos facilis nesciunt libero,
            perspiciatis fugiat id facere vitae rem voluptates temporibus eos?
            Blanditiis inventore quo molestias, iste aut quisquam culpa
            corrupti. Rem aliquam dicta iste ut error doloremque pariatur
            quaerat nesciunt, minima amet odio sed corporis placeat sunt
            mollitia natus est ratione veniam dolorem omnis earum tempora quidem
            quae? Animi facere vel suscipit saepe pariatur tempore vitae! Amet
            minima voluptas voluptatem dolor iure ullam odit iusto itaque, porro
            illum explicabo quasi doloremque qui reprehenderit. Hic ex ea nulla!
            Praesentium inventore eveniet minima atque. Quasi et ex corrupti
            consequatur saepe, nobis eligendi corporis obcaecati deleniti,
            dolorum alias. Eligendi libero aliquam delectus molestiae quod ipsum
            non inventore exercitationem, laudantium est mollitia maxime esse
            maiores sint fugiat quaerat nihil? Amet deleniti esse laboriosam
            necessitatibus.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
