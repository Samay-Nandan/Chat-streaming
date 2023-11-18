import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { SendMessage, ChatHeading, ShowMessages } from "@src/components";
import { streamResponse } from "@src/utils";

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [disableInput, setDisableInput] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim().length) return;
    const body = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: inputMessage,
        },
      ],
    };

    setMessages((old) => [...old, { from: "bot", text: inputMessage }]);
    setInputMessage("");

    setDisableInput(true);
    setMessages((old) => [...old, { from: "user", text: "" }]);

    await streamResponse({
      url: "api/chat-with-bot",
      body,
      setMessages,
    });
    setDisableInput(false);
  };

  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Flex
        w={["100%", "100%", "40%"]}
        h="90%"
        flexDir="column"
        border={"1px ridge #E2E8F0"}
        padding={"20px"}
        borderRadius={"5%"}
      >
        <ChatHeading />
        <ShowMessages messages={messages} />
        <SendMessage
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
          disableInput={disableInput}
        />
      </Flex>
    </Flex>
  );
};
