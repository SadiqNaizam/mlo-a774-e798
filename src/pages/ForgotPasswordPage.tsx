import React from 'react';

// Import custom layout components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import the custom form component for this page
import ForgotPasswordForm from '@/components/ForgotPasswordForm';

/**
 * ForgotPasswordPage Component
 * 
 * This page allows users to request a password reset link. It features a clean
 * layout with a header, footer, and a single-purpose form in the center.
 */
const ForgotPasswordPage: React.FC = () => {
  console.log('ForgotPasswordPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Page Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-4">
        {/* The form is the central element of this page */}
        <ForgotPasswordForm />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;