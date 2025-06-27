import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User, KeyRound } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');
  const location = useLocation();
  const pathname = location.pathname;

  const isDashboard = pathname === '/dashboard';
  const isLoginPage = pathname === '/';
  const isSignUpPage = pathname === '/sign-up';

  const renderAuthActions = () => {
    if (isLoginPage) {
      return (
        <Button asChild variant="outline">
          <Link to="/sign-up">Sign Up</Link>
        </Button>
      );
    }
    if (isSignUpPage) {
      return (
        <Button asChild variant="outline">
          <Link to="/">Log In</Link>
        </Button>
      );
    }
    return null; // No actions on forgot/reset password pages
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link to={isDashboard ? "/dashboard" : "/"} className="flex items-center gap-2">
          <KeyRound className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">SwiftLogin</span>
        </Link>
        
        {isDashboard ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/01.png" alt="@user" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">User</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    user@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <nav>
            {renderAuthActions()}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;