import React from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LogOut } from 'lucide-react';

const DashboardPage = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real application, you would also clear authentication tokens or state.
    console.log('User logging out and navigating to login page.');
    navigate('/'); // Navigate to the login page as defined in App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="items-center text-center">
            <Avatar className="h-20 w-20 mb-4">
              {/* Using a placeholder image for the avatar */}
              <AvatarImage src="https://github.com/shadcn.png" alt="@user-avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl">Welcome Back!</CardTitle>
            <CardDescription>You are successfully logged in to SwiftLogin.</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="text-sm text-muted-foreground border-t pt-4">
              <p>Authenticated as:</p>
              <p className="font-semibold text-foreground">user@example.com</p>
            </div>
            <Button onClick={handleLogout} className="w-full">
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;