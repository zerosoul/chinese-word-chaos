import React, { lazy, Suspense } from 'react';
import LoadTip from '../../components/LoadTip';
import HeaderWrapper from '../../containers/HeaderWrapper';
import StyledWrapper from './styled';
const Dashboard = lazy(() => import('../../containers/Dashboard'));

export default function Home() {
  return (
    <StyledWrapper>
      <HeaderWrapper />

      <Suspense fallback={<LoadTip />}>
        <Dashboard />
      </Suspense>
    </StyledWrapper>
  );
}
