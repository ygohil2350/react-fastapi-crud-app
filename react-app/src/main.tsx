import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App.tsx';
import AuthWrapper from './components/AuthWrapper/index.tsx';
import LoginPage from './components/LoginPage/index.tsx';
import './index.css';
import { store } from './store/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <AuthWrapper>
                <App />
              </AuthWrapper>
            }
          />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
