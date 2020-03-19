import React, { lazy, Suspense } from 'react';
import LoadTip from '../../components/LoadTip';
import Tip from '../../components/Tip';
import StyledWrapper from './styled';
const Dashboard = lazy(() => import('../../containers/Dashboard'));

export default function Home() {
  return (
    <StyledWrapper>
      <Tip />
      <Suspense fallback={<LoadTip />}>
        <Dashboard />
      </Suspense>
    </StyledWrapper>
  );
}
