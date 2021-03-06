import styled from "styled-components/macro";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const Container = styled.div`
  background: #0c0c0c;
  ${({ theme }) => theme.flexSet()};
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  &:before {
  }
`;

export const Bg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const Contents = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  flex-direction: column;
  align-items: center;
`;

export const H1 = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const P = styled.p``;

export const BtnWrapper = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
`;

export const ArrowFoward = styled(MdArrowForward)``;

export const ArrowRight = styled(MdKeyboardArrowRight)``;
