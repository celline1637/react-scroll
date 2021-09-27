const size = {
  mobile: '750px',
  tablet: '900px',
  laptop: '1200px',
  desktop: '1800px',
};

const calcRem = pxSize => `${pxSize / 16}rem`;

const calcP = (total, part) => {
  return `${(part / total) * 100}%`;
};

const calcVw = (width, px) => {
  return `${(px / width) * 100}vw`;
};

const calcVwL = px => {
  return `${(px / 1920) * 100}vw`;
};

const flexSet = (just = 'center', align = 'center') => {
  return `display: flex;
  justify-content: ${just};
  align-items: ${align};`;
};

const flexColumnSet = (just = 'center', align = 'center') => {
  return `display: flex;
  flex-direction: column;
  justify-content: ${just};
  align-items: ${align};`;
};

const posCenterX = (type = 'absolute') => {
  return `
  position: ${type};
  left:50%;
  transform:translateX(-50%);
  `;
};

const posCenterY = (type = 'absolute') => {
  return `
  position: ${type};
  top: 50%;
  transform: translateY(-50%);
  `;
};

const posCenter = (type = 'absolute') => {
  return `
  position: ${type};
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  `;
};

const posFixed = (type = 'fixed') => {
  return `
  position: ${type};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  `;
};

const colors = {
  yellow: '#fee500',
  primary_bgc: '#e8e8e8',
  secondary_bgc: '#fafafa',
  tertiary_bgc: '#f3f3f3',
  payment_bgc: '#f5f5f5',
  bgc: '#f7f7f7',
  withHost_bgc: '#f8f8f8',
  secondary_text: '#888888',
  menu: '#8d8d8d',
  btn: '#ff7c00',
  border: '#dbdbdb',
  secondary_btn: '#999999',
  black: '#252525',
  white: '#fff',
  th: '#555555',
  feed: '#707070',
  complete_btn: '#aaaaaa',
  red: '#F52D1E',
  warn: '#fa2c1b',
  cancle: '#777',
  link: '#333',
};

const theme = {
  calcRem,
  colors,
  calcP,
  calcVw,
  calcVwL,
  flexSet,
  flexColumnSet,
  posCenterX,
  posCenterY,
  posCenter,
  posFixed,
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  },

  flexAllCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainColor: '#0a4297',
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
