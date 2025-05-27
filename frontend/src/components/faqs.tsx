import { memo, useCallback, useId, useState, type FC } from "react";
import {
  Text,
  Spinner,
  Collapsible,
  Button,
  List,
  Box,
  BlockStack,
} from "@shopify/polaris";
import { ChatBox } from "./chatbox";

const collapsibleStyles = { duration: "500ms", timingFunction: "ease-in-out" };

interface Props {
  variants: string[];
  title: string;
  description: string;
}

const FAQsComponent: FC<Props> = ({ variants, title, description }) => {
  const id = useId();
  const [selectedFAQ, setSelectedFAQ] = useState("");
  const [open, setOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const closeChatBox = useCallback(() => {
    setIsChatOpen(false);
    setSelectedFAQ("");
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [faqs, setFaqs] = useState<string[]>([]);

  const fetchFAQs = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:8000/api/faqs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          variants: variants.join(", "),
        }),
      });
      const data = (await response.json()) as { faqs: string[] };
      setFaqs(data.faqs);
    } catch (error) {
      console.error(error);
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [title, description, variants]);

  const handleToggle = useCallback(
    () =>
      setOpen((prev) => {
        if (!prev && faqs.length === 0) {
          fetchFAQs();
        }

        return !prev;
      }),
    [faqs.length, fetchFAQs]
  );

  return (
    <Box shadow="500" padding="200" borderRadius="200" paddingBlockStart="400">
      <BlockStack gap="400">
        <Button
          fullWidth
          variant="primary"
          onClick={handleToggle}
          ariaExpanded={open}
          ariaControls={id}
        >
          FAQs
        </Button>
        <Collapsible open={open} id={id} transition={collapsibleStyles}>
          {isLoading ? <Spinner /> : null}
          {error ? <Text as="p">{error}</Text> : null}
          {faqs.length === 0 && !isLoading ? (
            <Text as="p">No FAQs found</Text>
          ) : null}
          <List>
            {faqs.map((faq) => (
              <List.Item key={faq}>
                <p
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => {
                    setSelectedFAQ(faq);
                    setIsChatOpen(true);
                  }}
                >
                  {faq}
                </p>
              </List.Item>
            ))}
          </List>
        </Collapsible>
        <ChatBox
          isOpen={isChatOpen}
          onClose={closeChatBox}
          initialQuestion={selectedFAQ}
          key={selectedFAQ}
          title={title}
          description={description}
          variants={variants}
        />
      </BlockStack>
    </Box>
  );
};

export const FAQs = memo(FAQsComponent);
