import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Upload, 
  FileText, 
  User,
  Activity,
  Settings
} from "lucide-react";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard"
  },
  {
    title: "Upload Scan",
    icon: Upload,
    path: "/upload"
  },
  {
    title: "Reports",
    icon: FileText,
    path: "/reports"
  },
  {
    title: "Profile",
    icon: User,
    path: "/profile"
  }
];

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-card border-r border-border h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link to="/dashboard" className="flex items-center space-x-3">
          <Activity className="h-8 w-8 text-medical-secondary" />
          <span className="text-xl font-bold text-foreground">RadAssist</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-medical-secondary/20 text-medical-secondary border border-medical-secondary/30'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center px-4 py-3 text-sm text-muted-foreground">
          <Settings className="h-4 w-4 mr-2" />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;