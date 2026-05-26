/** @format */

import styled, { css } from 'styled-components';
import { useDarkMode } from '../context/DarkModeContext';

const Img = styled.img`
  /* Target component when type prop is 'short' */
  ${(props) =>
    props.type === 'short' &&
    css`
      @media (min-width: 768px) and (max-width: 1199px) {
        scale: 0.8;
      }
    `}

  /* Target component when type prop is 'long' */
  ${(props) =>
    props.type === 'long' &&
    css`
      scale: 1.2;
    `}

  /* Target component when mode prop is 'dark' */
  ${(props) =>
    props.type === 'default' &&
    css`
      width: 70%;
      scale: 0.7;
      display: flex;
      justify-self: center;
    `}
`;

function Logo({ type = 'default' }) {
  const { isDarkMode } = useDarkMode();

  const logoTypes = {
    long: 'logo-long.png',
    short: 'logo-short.png',
    default: 'logo.png',
  };
  return (
    <Img
      type={type}
      src={logoTypes[type]}
      alt="Logo"
      mode={isDarkMode ? 'dark' : ''}
    />
  );
}

export default Logo;
