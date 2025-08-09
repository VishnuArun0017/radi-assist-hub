import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Users, 
  Award, 
  Target,
  Heart,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Michael Chen",
      role: "Chief Medical Officer",
      specialty: "Radiology & AI Research",
      description: "20+ years in diagnostic imaging with focus on AI integration"
    },
    {
      name: "Sarah Rodriguez",
      role: "Head of AI Development",
      specialty: "Machine Learning Engineer",
      description: "Expert in medical imaging AI and deep learning algorithms"
    },
    {
      name: "Dr. Emily Watson",
      role: "Clinical Advisor",
      specialty: "Interventional Radiology",
      description: "Board-certified radiologist specializing in minimally invasive procedures"
    },
    {
      name: "David Park",
      role: "VP of Engineering",
      specialty: "Healthcare Technology",
      description: "Leading development of secure, HIPAA-compliant medical platforms"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every feature is designed with patient safety and outcomes as our top priority."
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Enterprise-grade security ensuring complete HIPAA compliance and data protection."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously advancing AI technology to enhance diagnostic accuracy and efficiency."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Empowering medical teams to work together seamlessly for better patient care."
    }
  ];

  const achievements = [
    "98.5% AI diagnostic accuracy rate",
    "50,000+ scans analyzed successfully", 
    "500+ healthcare professionals using our platform",
    "FDA clearance for AI diagnostic assistance",
    "HIPAA compliant with SOC 2 Type II certification",
    "Published research in 15+ medical journals"
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-medical-primary/10 to-medical-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Activity className="h-12 w-12 text-medical-secondary mr-4" />
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                About RadAssist
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              RadAssist is revolutionizing diagnostic radiology through advanced AI technology, 
              empowering medical professionals to deliver faster, more accurate diagnoses while 
              maintaining the highest standards of patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/register">
                  Join Our Platform
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-medical-secondary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To enhance the capabilities of radiologists worldwide by providing intelligent, 
                AI-powered diagnostic tools that improve accuracy, reduce interpretation time, 
                and ultimately lead to better patient outcomes.
              </p>
              <p className="text-muted-foreground">
                We believe that the combination of human expertise and artificial intelligence 
                represents the future of medical imaging, where technology amplifies the skills 
                of medical professionals rather than replacing them.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-medical-accent/20 to-medical-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-secondary mb-2">50%</div>
                  <div className="text-sm text-muted-foreground">Faster Diagnosis</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-accent mb-2">98.5%</div>
                  <div className="text-sm text-muted-foreground">AI Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-success mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Medical Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from product development 
              to customer support and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-medical-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-medical-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-medical-secondary mr-3" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Our Achievements
                </h2>
              </div>
              <p className="text-xl text-muted-foreground">
                Recognized milestones in advancing medical AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
                  <CheckCircle className="h-6 w-6 text-medical-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-medical-secondary mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Our Leadership Team
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experts driving innovation in medical AI and radiology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-medical-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-8 w-8 text-medical-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-medical-accent font-medium mb-2">
                        {member.role}
                      </p>
                      <Badge variant="secondary" className="mb-3">
                        {member.specialty}
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-medical-secondary mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Cutting-Edge Technology
              </h2>
            </div>
            <p className="text-xl text-muted-foreground mb-12">
              Our platform leverages the latest advances in artificial intelligence, 
              machine learning, and medical imaging to provide unparalleled diagnostic assistance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-medical-primary mb-2">Deep Learning</div>
                <p className="text-sm text-muted-foreground">
                  Advanced neural networks trained on millions of medical images
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-medical-accent mb-2">Cloud Infrastructure</div>
                <p className="text-sm text-muted-foreground">
                  Scalable, secure processing with enterprise-grade reliability
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-medical-success mb-2">Real-time Analysis</div>
                <p className="text-sm text-muted-foreground">
                  Instant AI-powered insights for faster clinical decision making
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-medical-primary to-medical-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of medical professionals already using RadAssist to enhance 
            their diagnostic capabilities and improve patient outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/register">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-medical-primary" asChild>
              <Link to="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;