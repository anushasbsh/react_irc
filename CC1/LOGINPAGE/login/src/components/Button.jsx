import styled from "styled-components";
import { useState } from "react";

export default function Button({ content, onClick, isSubmitted }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <StyledButton
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isSubmitted={isSubmitted}
      isHovered={isHovered}
    >
      {isSubmitted ? "Submitted!" : content}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: ${(props) =>
    props.isSubmitted
      ? "linear-gradient(to right, #4CAF50, #45a049)"
      : props.isHovered
      ? "linear-gradient(to right, #10163c 0%, #03217b 79%)"
      : "linear-gradient(to right, #14163c 0%, #03217b 79%)"};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: ${(props) => (props.isSubmitted ? "default" : "pointer")};
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.isSubmitted
        ? "linear-gradient(to right, #4CAF50, #45a049)"
        : "linear-gradient(to right, #10163c 0%, #03217b 79%)"};
  }
`;
