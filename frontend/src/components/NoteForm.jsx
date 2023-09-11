/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Textarea,
  FormControl,
  useToast,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export function NoteForm({
  id,
  title,
  content,
  onSubmit,
  handleChange,
  formTitle,
  initialRef,
  finalRef,
  isOpen,
  onClose,
}) {
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        finalFocusRef={finalRef}
        onClose={onClose}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>{formTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input type={"hidden"} value={id}></Input>
            <FormControl isRequired>
              <FormLabel>Título</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Título da nota"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                defaultValue={title}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Conteúdo</FormLabel>
              <Textarea
                placeholder="Comece a escrever"
                name="content"
                value={content}
                onChange={handleChange}
                defaultValue={content}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onCLick={onSubmit} colorScheme="blue" mr={3}>
               Salvar
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* <form onSubmit={onSubmit}>
        <label htmlFor="title">Note title</label>
        <input
          value={note.title}
          type="text"
          name="title"
          onChange={handleChange}
          defaultValue={title}
        />
        <p></p>
        <label htmlFor="content">Note content</label>
        <input
          value={note.content}
          type="text"
          name="content"
          onChange={handleChange}
          defaultValue={content}
        />
        <p></p>
        <button type="submit">{buttonText}</button>
      </form> */}
    </>
  );
}
