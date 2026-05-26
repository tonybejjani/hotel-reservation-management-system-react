/** @format */

import styled from 'styled-components';
import LoginForm from '../features/authentication/LoginForm';
import LoginLogo from '../ui/LoginLogo';
import Heading from '../ui/Heading';

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 32rem;
  align-content: center;
  justify-content: center;
  gap: 2rem;
  background-color: var(--color-grey-50);

  /* Desktop: Standard button */
  @media (min-width: 360px) {
    grid-template-columns: 36rem;
  }

  @media (min-width: 470px) {
    grid-template-columns: 40rem;
  }

  @media (min-width: 575px) {
    grid-template-columns: 44rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 48rem;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <LoginLogo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
