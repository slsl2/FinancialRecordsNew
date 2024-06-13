import styled from "styled-components";

const Button = ({
  width,
  backgroundColor,
  color,
  margin,
  contents,
  type,
  onClick,
}) => {
  return (
    <StyledButton
      $width={width}
      $backgroundColor={backgroundColor}
      $color={color}
      $margin={margin}
      type={type}
      onClick={onClick}
    >
      {contents}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 1.4rem;
  border: none;
  width: ${(props) => props.$width};
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color};
  margin: ${(props) => props.$margin};
`;

export default Button;
