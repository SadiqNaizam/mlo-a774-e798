import React from 'react';

// Import custom layout components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import the main form component for this page
import SignUpForm from '@/components/SignUpForm';

const SignUpPage = () => {
  console.log('SignUpPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <SignUpForm />
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;