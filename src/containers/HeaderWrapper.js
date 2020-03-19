import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Tip from '../components/Tip';

const StyledWrapper = styled.header`
  position: relative;
  margin-bottom: 4rem;
`;
export default function HeaderWrapper() {
  return (
    <StyledWrapper>
      <Header />
      <Tip />
    </StyledWrapper>
  );
}
