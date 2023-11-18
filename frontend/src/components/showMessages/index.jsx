import { Avatar, Flex, Spinner, Text } from "@chakra-ui/react";
import { ScrollIntoView } from "@src/utils";

const BotMessage = ({ item }) => (
  <Flex w="100%" justify="flex-end">
    <Flex
      bg="black"
      color="white"
      maxW="350px"
      my="1"
      p="3"
      borderRadius={"20px"}
      margin={"10px 0"}
    >
      {!item.text ? <Spinner /> : <Text>{item.text}</Text>}
    </Flex>
  </Flex>
);

const UserMessage = ({ item }) => (
  <Flex w="100%">
    <Avatar name="Computer" src="https://avataaars.io" bg="blue.300" />
    <Flex
      bg="gray.100"
      color="black"
      maxW="350px"
      my="1"
      p="3"
      borderRadius={"20px"}
      margin={"0 5px"}
    >
      <Text>{item.text}</Text>
    </Flex>
  </Flex>
);

export const ShowMessages = ({ messages }) => (
  <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
    {messages.map((item, index) =>
      item.from === "bot" ? (
        <UserMessage item={item} key={index} />
      ) : (
        <BotMessage item={item} key={index} />
      )
    )}
    <ScrollIntoView />
  </Flex>
);
