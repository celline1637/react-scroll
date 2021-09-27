import styled from "styled-components/macro";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  transition: all 0.2s ease-in-out;
  ${({ theme }) => theme.flexSet()};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#010606" : "#01bf71")};
  }
`;
