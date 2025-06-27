import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LoginForm from '@/components/LoginForm';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        {/* 
          The LoginForm component contains the Card, Input, Label, Button,
          and handles form logic, submission, and links to other pages 
          like Sign-Up and Forgot Password.
        */}
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;