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
      border-right: 2px dashed #666;
      border-top: 2px dashed #666;
      position: relative;
    }
    &.da {
      margin-left: -2px;
      border-left: 2px dashed #666;
      border-bottom: 2px dashed #666;
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
