import { toast } from "react-toastify";
import { VITE_BACKEND_URL } from "@src/config";

export const getStreamResponse = ({ url, body }) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  return fetch(`${VITE_BACKEND_URL}/${url}`, requestOptions);
};

export const readAndUpdateStream = async ({ response, setMessages }) => {
  const reader = response.body.getReader();
  const textDecoder = new TextDecoder("utf-8");

  let streamContent = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    streamContent += textDecoder.decode(value);
    updateMessages({ streamContent, setMessages });
  }
};

export const updateMessages = ({ streamContent, setMessages }) =>
  setMessages((oldMessages) => {
    const lastMessageIndex = oldMessages.length - 1;
    const updatedLastMessage = {
      ...oldMessages[lastMessageIndex],
      text: streamContent,
    };
    return [...oldMessages.slice(0, lastMessageIndex), updatedLastMessage];
  });

export const streamResponse = async ({ url, body, setMessages }) => {
  try {
    const response = await getStreamResponse({ url, body });
    await readAndUpdateStream({ response, setMessages });
  } catch (error) {
    toast.error(error.message);
  }
};
