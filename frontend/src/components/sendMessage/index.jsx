import { Flex, Input, Button } from "@chakra-ui/react";

export const SendMessage = ({
  inputMessage,
  setInputMessage,
  handleSendMessage,
  disableInput,
}) => (
  <Flex w="100%" mt="5" justifyContent={"space-between"}>
    <Input
      placeholder="Type Something..."
      border="none"
      outline={"none"}
      onKeyDown={(event) => event.key === "Enter" && handleSendMessage()}
      marginRight={"20px"}
      value={inputMessage}
      disabled={disableInput}
      onChange={(e) => setInputMessage(e.target.value)}
    />
    <Button
      bg="black"
      color="white"
      borderRadius={"20px"}
      padding={"0 20px"}
      _hover={{
        bg: "white",
        color: "black",
        border: "1px solid black",
      }}
      onClick={handleSendMessage}
    >
      Send
    </Button>
  </Flex>
);
