import { StyledButton } from "../Button/style";

export default function Button({
  children,
  width,
  color,
  textColor,
  borderColor,
  height,
  borderRadius,
  fontSize,
  onClick,
}) {
  return (
    <StyledButton
      width={width}
      color={color}
      textColor={textColor}
      borderColor={borderColor}
      height={height}
      borderRadius={borderRadius}
      onClick={onClick}
      fontSize={fontSize}
    >
      {children}
    </StyledButton>
  );
}
