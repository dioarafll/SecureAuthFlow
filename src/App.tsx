// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import VerifyPage from './pages/VerifyPage';
import M2FAPage from './pages/M2FAPage';
import VerifyPhonePage from './pages/VerifyPhonePage';

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/" element={<SignInPage />} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/phone-verification" element={<VerifyPhonePage />} />
      <Route path="/verify-account" element={<VerifyPage />} />
      <Route path="/mfa" element={<M2FAPage />} />
    </Routes>
  );
};

export default App;
