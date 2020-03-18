import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.aside`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.4rem 0.6rem;
  background: rgba(2, 2, 2, 0.6);
  color: #fff;
`;

export default function LoadTip() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 12000);
  }, []);
  return visible ? <StyledWrapper>分词字典加载较慢，请耐心等待...</StyledWrapper> : null;
}
