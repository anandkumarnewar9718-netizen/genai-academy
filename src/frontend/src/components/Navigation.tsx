import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/useAuth";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  Brain,
  Home,
  LayoutDashboard,
  LogIn,
  LogOut,
  ShieldCheck,
} from "lucide-react";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/courses", icon: BookOpen, label: "Courses" },
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin", icon: ShieldCheck, label: "Admin" },
];

function NavLink({
  to,
  icon: Icon,
  label,
  isActive,
}: {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      to={to}
      data-ocid={`nav.${label.toLowerCase()}_link`}
      className={`flex flex-col items-center justify-center gap-0.5 py-2 px-3 rounded-lg transition-all duration-200 min-h-[48px] min-w-[48px] flex-1
        ${
          isActive
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
        }`}
    >
      <Icon className={`h-5 w-5 ${isActive ? "stroke-[2.5]" : "stroke-2"}`} />
      <span className="text-[10px] font-body font-medium leading-none">
        {label}
      </span>
      {isActive && <span className="w-1 h-1 rounded-full bg-primary mt-0.5" />}
    </Link>
  );
}

// Mobile bottom navigation
export function BottomNav() {
  const state = useRouterState();
  const pathname = state.location.pathname;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border/60 safe-bottom md:hidden"
      aria-label="Mobile navigation"
      data-ocid="bottom_nav"
    >
      <div className="flex items-stretch h-16 px-2">
        {navItems.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            icon={icon}
            label={label}
            isActive={to === "/" ? pathname === to : pathname.startsWith(to)}
          />
        ))}
      </div>
    </nav>
  );
}

// Desktop sidebar navigation
export function SidebarNav() {
  const state = useRouterState();
  const pathname = state.location.pathname;
  const { isAuthenticated, principal, login, logout } = useAuth();

  return (
    <aside
      className="hidden md:flex flex-col w-60 bg-card border-r border-border/60 h-screen sticky top-0 z-40"
      aria-label="Sidebar navigation"
      data-ocid="sidebar_nav"
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5 border-b border-border/60">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-xs">
          <Brain className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="font-display font-bold text-base text-foreground">
          GenAI Academy
        </span>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ to, icon: Icon, label }) => {
          const active = to === "/" ? pathname === to : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              data-ocid={`sidebar.${label.toLowerCase()}_link`}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-body text-sm font-medium transition-all duration-200 min-h-[48px]
                ${
                  active
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
              {active && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </nav>

      <Separator className="mx-3" />

      {/* Auth */}
      <div className="px-4 py-4">
        {isAuthenticated ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/20 text-primary text-xs font-display">
                  {principal?.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-body text-muted-foreground truncate">
                  {principal?.slice(0, 16)}...
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="w-full btn-touch text-xs"
              onClick={logout}
              data-ocid="auth.logout_button"
            >
              <LogOut className="h-3.5 w-3.5 mr-1.5" />
              Sign Out
            </Button>
          </div>
        ) : (
          <Button
            className="w-full btn-touch font-display font-semibold text-sm"
            onClick={login}
            data-ocid="auth.login_button"
          >
            <LogIn className="h-4 w-4 mr-2" />
            Sign In
          </Button>
        )}
      </div>
    </aside>
  );
}
