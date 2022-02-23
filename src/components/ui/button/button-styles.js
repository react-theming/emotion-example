import styled from "@emotion/styled";

export const StylesButton = styled.button`
  cursor: pointer;
  padding: 12px;
  font-size: ${({ theme }) => theme.palette?.secondary?.light};
  background-color: ${({ theme }) => theme.palette?.primary?.dark};
  border: 1px solid ${({ theme }) => theme.palette?.secondary?.dark};
  border-radius: 10px;
`;