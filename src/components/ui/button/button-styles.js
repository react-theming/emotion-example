import styled from "@emotion/styled";

export const StylesButton = styled.button`
  cursor: pointer;
  padding: 12px;
  background-color: ${({ theme }) => theme.palette?.primary.light};
  border: 1px solid ${({ theme }) => theme.colors?.accent2};
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  border-radius: 10px;
`;