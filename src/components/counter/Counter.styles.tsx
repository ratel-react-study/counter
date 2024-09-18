import { IconButton } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Button = styled(IconButton)<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;