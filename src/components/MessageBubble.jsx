import { useState, useEffect } from "react";
import {
  MessageBubbleContainer,
  BubbleContent,
} from "../styles/MessageBubbleStyles";

const MessageBubble = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MessageBubbleContainer show={show}>
      <BubbleContent>
        <div>
          Psst... denna sida är byggd med <code>React + Vite</code>,{" "}
          <code>TypeScript</code> & <code>styled-components</code> 💙
        </div>
      </BubbleContent>
    </MessageBubbleContainer>
  );
};

export default MessageBubble;
