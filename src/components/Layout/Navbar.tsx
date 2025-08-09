import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Activity, User, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
interface NavbarProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}
const Navbar = ({
  isAuthenticated = false,
  onLogout
}: NavbarProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const NavLinks = () => <>
      <Link to="/" className={`text-sm font-medium transition-colors hover:text-medical-accent ${isActive('/') ? 'text-medical-accent' : 'text-foreground'}`}>
        Home
      </Link>
      <Link to="/about" className={`text-sm font-medium transition-colors hover:text-medical-accent ${isActive('/about') ? 'text-medical-accent' : 'text-foreground'}`}>
        About
      </Link>
      <Link to="/contact" className={`text-sm font-medium transition-colors hover:text-medical-accent ${isActive('/contact') ? 'text-medical-accent' : 'text-foreground'}`}>
        Contact
      </Link>
      {isAuthenticated && <Link to="/dashboard" className={`text-sm font-medium transition-colors hover:text-medical-accent ${isActive('/dashboard') ? 'text-medical-accent' : 'text-foreground'}`}>
          Dashboard
        </Link>}
    </>;
  return <nav className="border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-medical-secondary" />
            <span className="text-xl font-bold text-foreground">Radiology-assistant</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!isAuthenticated ? <>
                <Button variant="ghost" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="default" asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </> : <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/profile">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" onClick={onLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px]">
                <div className="flex flex-col space-y-6 mt-8">
                  <NavLinks />
                  <div className="border-t pt-6 space-y-2">
                    {!isAuthenticated ? <>
                        <Button variant="ghost" className="w-full justify-start" asChild>
                          <Link to="/login">Login</Link>
                        </Button>
                        <Button variant="default" className="w-full" asChild>
                          <Link to="/register">Register</Link>
                        </Button>
                      </> : <>
                        <Button variant="ghost" className="w-full justify-start" asChild>
                          <Link to="/profile">
                            <User className="h-4 w-4 mr-2" />
                            Profile
                          </Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start" onClick={onLogout}>
                          <LogOut className="h-4 w-4 mr-2" />
                          Logout
                        </Button>
                      </>}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;