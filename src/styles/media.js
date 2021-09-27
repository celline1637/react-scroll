import { css } from "styled-components";

const breakpoint = {
  tablet: 960,
  desktop: 1024,
};

export default Object.keys(breakpoint).reduce((acc, device) => {
  acc[device] = (...attribute) => css`
    @media screen and (min-width: ${breakpoint[device]}px) {
      ${css(...attribute)};
    }
  `;
  return acc;
}, {});
