import { Activity } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-medical-secondary" />
              <span className="text-lg font-bold text-foreground">RadAssist</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Advanced AI-powered radiologist assistant system for enhanced medical imaging analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-medical-accent transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-medical-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-medical-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-medical-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: support@radassist.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Medical Center Dr</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 RadAssist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;