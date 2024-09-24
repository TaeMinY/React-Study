import styled from "styled-components";

const InputContainer = styled.div`
  width: 200px;

  border-radius: 8px;
  border: 1px solid #c9c4c4;

  padding: 12px 14px;
`;

const InputText = styled.input`
  width: 100%;
  font-size: 16px;
  font-style: normal;
  letter-spacing: -0.12px;

  border: 0px;
  outline: none;

  &::-webkit-input-placeholder {
    color: #e0e0e0;
  }
`;

function Input({ placeholder, value, onChange }) {
  return (
    <InputContainer>
      <InputText
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></InputText>
    </InputContainer>
  );
}

export default Input;
