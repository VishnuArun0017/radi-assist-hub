import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Shield, Zap, Users, CheckCircle } from "lucide-react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import heroImage from "@/assets/medical-hero.jpg";
const Landing = () => {
  const features = [{
    icon: Activity,
    title: "AI-Powered Analysis",
    description: "Advanced AI algorithms provide accurate scan analysis and diagnostic suggestions."
  }, {
    icon: Shield,
    title: "Secure & Compliant",
    description: "HIPAA compliant with enterprise-grade security to protect patient data."
  }, {
    icon: Zap,
    title: "Fast Processing",
    description: "Get instant AI-generated reports and recommendations for faster diagnosis."
  }, {
    icon: Users,
    title: "Collaborative Platform",
    description: "Share findings and collaborate with medical teams seamlessly."
  }];
  const benefits = ["Reduce diagnosis time by up to 50%", "Improve diagnostic accuracy", "Streamline workflow management", "24/7 AI assistant availability", "Comprehensive patient record management"];
  return <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Medical Technology" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Advanced{" "}
              <span className="text-medical-secondary">Radiologist</span>{" "}
              Assistant System
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Enhance your diagnostic capabilities with AI-powered scan analysis, 
              intelligent reporting, and comprehensive patient management tools 
              designed specifically for medical professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/register">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Medical Professionals
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to enhance your radiology practice with cutting-edge AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-medical-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-medical-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Transform Your Medical Practice
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of radiologists who trust RadAssist to improve their 
                diagnostic accuracy and streamline their workflow.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-medical-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">{benefit}</span>
                  </li>)}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-medical-primary/20 to-medical-secondary/20 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-medical-secondary mb-2">50,000+</div>
                <div className="text-muted-foreground mb-6">Scans Analyzed</div>
                
                <div className="text-4xl font-bold text-medical-accent mb-2">98.5%</div>
                <div className="text-muted-foreground mb-6">Accuracy Rate</div>
                
                <div className="text-4xl font-bold text-medical-primary mb-2">24/7</div>
                <div className="text-muted-foreground">AI Assistance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      <Footer />
    </div>;
};
export default Landing;