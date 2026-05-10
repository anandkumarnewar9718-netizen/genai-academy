import { BottomNav, SidebarNav } from "@/components/Navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "@tanstack/react-router";
import { Brain, LogIn, LogOut } from "lucide-react";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isAuthenticated, principal, login, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Mobile Header */}
      <header
        className="md:hidden sticky top-0 z-40 bg-card border-b border-border/60 shadow-xs"
        data-ocid="header"
      >
        <div className="flex items-center justify-between px-4 h-14">
          <Link
            to="/"
            className="flex items-center gap-2"
            data-ocid="header.logo_link"
          >
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <Brain className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-base text-foreground">
              GenAI Academy
            </span>
          </Link>

          <div>
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary/20 text-primary text-xs font-display">
                    {principal?.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={logout}
                  aria-label="Sign out"
                  data-ocid="header.logout_button"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                size="sm"
                className="btn-touch font-display font-semibold text-xs h-9 px-3"
                onClick={login}
                data-ocid="header.login_button"
              >
                <LogIn className="h-3.5 w-3.5 mr-1.5" />
                Sign In
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Desktop layout: sidebar + main */}
      <div className="flex flex-1 md:overflow-hidden">
        <SidebarNav />

        {/* Main content */}
        <main
          className="flex-1 flex flex-col min-w-0 md:h-screen md:overflow-y-auto"
          data-ocid="main_content"
        >
          {children}

          {/* Footer */}
          <footer className="mt-auto bg-muted/40 border-t border-border/60 py-4 px-4 md:px-8">
            <p className="text-xs text-muted-foreground text-center font-body">
              © {new Date().getFullYear()}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-2 hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </footer>
        </main>
      </div>

      {/* Mobile bottom nav */}
      <BottomNav />

      {/* Spacer for bottom nav on mobile */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </div>
  );
}
