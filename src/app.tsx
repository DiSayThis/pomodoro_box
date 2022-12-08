import React, { useState, useEffect } from 'react';
import './main.global.css';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
import { AppContainer } from './shared/hoc/AppContainer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ErrorPage } from './shared/Pages/ErrorPage';
import { PomodoroPage } from './shared/Pages/PomodoroPage';
import { StaticsPage } from './shared/Pages/StaticsPage';
import { SettingsPage } from './shared/Pages/SettingsPage';

function AppComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ReduxProvider store={store}>
      {mounted && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppContainer />}>
              <Route index element={<PomodoroPage />} />
              <Route path="statics" element={<StaticsPage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </ReduxProvider>
  );
}

export const App = () => <AppComponent />;
