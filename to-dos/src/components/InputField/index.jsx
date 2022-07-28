import { StyledInput } from "./style";

export default function Input({
  type,
  name,
  label,
  register,
  width,
  yupMessage,
  placeholder,
}) {
  return (
    <StyledInput width={width}>
      <label htmlFor={name}>{label}</label>
      <input {...register(name)} type={type} placeholder={placeholder} />
      <span className="error">{yupMessage}</span>
    </StyledInput>
  );
}
