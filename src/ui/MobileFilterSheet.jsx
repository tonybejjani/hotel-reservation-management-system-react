/** @format */

import styled from 'styled-components';
import { useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.25)'};
  z-index: 1300;
`;

const Sheet = styled.div`
  position: fixed;

  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) =>
    theme.isDarkMode ? 'var(--color-grey-900)' : 'var(--color-grey-0)'};
  border-radius: 1.2rem 1.2rem 0 0;
  box-shadow: ${({ theme }) =>
    theme.isDarkMode
      ? '0 -8px 32px rgba(0, 0, 0, 0.3)'
      : '0 -8px 32px rgba(0, 0, 0, 0.18)'};
  z-index: 1400;
  padding: 2rem 1.5rem 2.5rem 1.5rem;
  min-height: 40vh;
  animation: slideUp 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.4rem;
  border-bottom: 2px solid
    ${({ theme }) =>
      theme.isDarkMode ? 'var(--color-grey-800)' : 'var(--color-grey-200)'};

  padding-bottom: 1.2rem;
  span {
    color: ${({ theme }) =>
      theme.isDarkMode ? 'var(--color-grey-100)' : 'var(--color-grey-700)'};
  }

  button {
    color: ${({ theme }) =>
      theme.isDarkMode ? 'var(--color-grey-100)' : 'var(--color-grey-700)'};
  }
`;

const HeaderTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
`;

const CloseButton = styled.button`
  font-size: 2.4rem;
  line-height: 1;
  cursor: pointer;
  background: none;
`;

function MobileFilterSheet({ open, onClose, children }) {
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    if (!open) return;
    const onEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <Sheet>
        <Header>
          <HeaderTitle>Filter & Sort</HeaderTitle>
          <CloseButton onClick={onClose} aria-label="Close">
            ×
          </CloseButton>
        </Header>
        {children}
      </Sheet>
    </>
  );
}

export default MobileFilterSheet;
