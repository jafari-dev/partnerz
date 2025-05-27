import {
  Badge,
  BlockStack,
  Button,
  Card,
  Divider,
  Spinner,
  Text,
  TextField,
} from "@shopify/polaris";
import { Modal } from "@shopify/polaris";
import { memo, useCallback, useState } from "react";
import { flushSync } from "react-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialQuestion: string;
  title: string;
  description: string;
  variants: string[];
}

const ChatBoxComponent = ({
  title,
  description,
  variants,
  initialQuestion,
  isOpen,
  onClose,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chats, setChats] = useState<{ question: string; answer: string }[]>(
    []
  );
  console.log(12345,initialQuestion)
  const [questionText, setQuestionText] = useState(initialQuestion);

  const askQuestion = useCallback(async () => {
    flushSync(() => {
      setIsLoading(true);
      setQuestionText("");
    });

    try {
      const response = await fetch(`http://localhost:8000/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: questionText,
          product: {
            title,
            description,
            variants: variants.join(", "),
          },
        }),
      });
      const { answer } = (await response.json()) as { answer: string };

      setChats((prevChats) => [
        ...prevChats,
        { question: questionText, answer },
      ]);
      setQuestionText("");
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [description, questionText, title, variants]);

  if (error) {
    return <Text as="p">{error}</Text>;
  }

  console.log(123456,questionText)

  return (
    <Modal title={`Ask about ${title}`} open={isOpen} onClose={onClose}>
      <Card padding="400">
        <BlockStack gap="400">
          {chats.map((chat, index) => (
            <BlockStack gap="400" key={index}>
              <Text as="p">
                <Badge tone="info">Question</Badge> {chat.question}
              </Text>
              <Text as="p">
                <Badge tone="success">Answer</Badge> {chat.answer}
              </Text>
            </BlockStack>
          ))}
          {isLoading ? <Spinner /> : null}
          <Divider borderWidth="100" />
          <TextField
            inputMode="text"
            autoComplete="on"
            label="Question"
            value={questionText}
            onChange={setQuestionText}
          />
          <Button disabled={questionText.trim() === "" || isLoading} onClick={askQuestion}>
            ASK
          </Button>
        </BlockStack>
      </Card>
    </Modal>
  );
};

export const ChatBox = memo(ChatBoxComponent);
