import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.header`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
  white-space: nowrap;
  .w {
    padding: 0.1rem;
    &.luan {
      border-right: 2px solid #222;
      border-top: 2px solid #222;
      position: relative;
      &:after {
        content: '';
        width: 2px;
        height: 2px;
        position: absolute;
        bottom: -2px;
        right: -2px;
        background: #222;
      }
    }
    &.da {
      border-bottom: 2px solid #222;
    }
  }
`;
export default function Header() {
  return (
    <StyledWrapper>
      <span className="w">中</span>
      <span className="w">文</span>
      <span className="w luan">乱</span>
      <span className="w da">打</span>
      <span className="w">小</span>
      <span className="w">工</span>
      <span className="w">具</span>
    </StyledWrapper>
  );
}
