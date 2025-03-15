import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MessageBubbleContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
  }
`;

export const BubbleContent = styled.div`
  background: rgba(53, 56, 83, 0.95);
  color: white;
  padding: 15px 20px;
  border-radius: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 400px;
  width: max-content;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeIn} 0.5s ease forwards;
  font-size: 0.95rem;
  line-height: 1.5;
  letter-spacing: 0.2px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;

  &::before {
    content: "";
    position: absolute;
    bottom: -8px;
    right: 15px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid rgba(53, 56, 83, 0.95);
    border-bottom: none;
  }

  code {
    color: #3498db;
    background: rgba(52, 152, 219, 0.1);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: "Fira Code", monospace;
    font-weight: 500;
    border: 1px solid rgba(52, 152, 219, 0.3);
    margin: 0 2px;
    display: inline-block;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    max-width: 350px;
    padding: 12px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    max-width: 280px;
    padding: 10px 14px;
    font-size: 0.85rem;
    width: calc(100vw - 40px);
  }
`;
