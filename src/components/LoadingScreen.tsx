import styled from 'styled-components';

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoadingAnimation = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid #4facfe;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingScreen = () => (
  <LoadingWrapper>
    <LoadingAnimation />
  </LoadingWrapper>
);

export default LoadingScreen;
