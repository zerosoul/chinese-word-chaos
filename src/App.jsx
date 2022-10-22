import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import LoadTip from './components/LoadTip';
import HeaderWrapper from './containers/HeaderWrapper';
const Dashboard = lazy(() => import('./containers/Dashboard'));

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto;
  .input {
    width: 100%;
    max-width: 100%;
    border: 1px solid #333;
    background: transparent;
    padding: 0.4rem;
    margin: 1rem 0 2rem 0;
    min-height: 4rem;
    min-width: 16rem;
  }
  .output {
    margin-top: 2rem;
    padding: 0.4rem 1rem;
    border: 1px dashed #666;
    line-height: 1.4;
    text-shadow: 0 0 1px black;
    letter-spacing: 1px;
    position: relative;
    cursor: pointer;
    .content {
      max-height: 14rem;
      overflow: scroll;
      text-align: justify;
    }
    .copy {
      position: absolute;
      top: -2rem;
      right: 0;
      display: flex;
      align-items: center;
      svg {
        width: 1.2rem;
      }
      .tip {
        font-size: 0.6rem;
        font-weight: normal;
      }
    }
  }
  .btn {
    background: none;
    border: 1px solid #665;
    outline: none;
    border-radius: 5px;
    padding: 0.4rem 0.6rem;
    font-size: 1.2rem;
    cursor: pointer;
    &[disabled] {
      color: #999;
    }
    &:hover {
      box-shadow: 0 0 5px black;
    }
  }
`;

function App() {
  return (
    <StyledWrapper>
      <HeaderWrapper />
      <Suspense fallback={<LoadTip />}>
        <Dashboard />
      </Suspense>
    </StyledWrapper>
  );
}

export default App;
