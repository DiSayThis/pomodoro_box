import React, { useEffect } from 'react';
import { Content } from '../Content';
import { Outlet } from 'react-router-dom';
import { Header } from '../../Components/Header';

interface IAppContainerProps {
  children?: React.ReactNode;
}

export function AppContainer({ children }: IAppContainerProps) {
  return (
    <>
      <Header />
      <Content>
        {children}
        <Outlet />
      </Content>
    </>
  );
}
