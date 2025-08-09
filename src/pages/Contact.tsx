import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Users,
  HeadphonesIcon,
  Building
} from "lucide-react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      details: "support@radassist.com",
      description: "Get help with technical issues and account questions"
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: "+1 (555) 123-4567",
      description: "Monday - Friday, 8:00 AM - 6:00 PM EST"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: "123 Medical Center Drive, Suite 400",
      description: "New York, NY 10001, United States"
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "24/7 Emergency Support",
      description: "Critical system issues and urgent medical needs"
    }
  ];

  const departments = [
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      email: "tech@radassist.com",
      description: "Platform issues, integration help, and troubleshooting"
    },
    {
      icon: Users,
      title: "Sales & Partnerships",
      email: "sales@radassist.com", 
      description: "Product demos, pricing, and business partnerships"
    },
    {
      icon: Building,
      title: "Enterprise Solutions",
      email: "enterprise@radassist.com",
      description: "Custom solutions for large healthcare organizations"
    },
    {
      icon: MessageCircle,
      title: "Customer Success",
      email: "success@radassist.com",
      description: "Training, onboarding, and best practice guidance"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organization: "",
        subject: "",
        message: "",
        inquiryType: ""
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-medical-primary/10 to-medical-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions about RadAssist? Our team of experts is here to help you 
              get the most out of our AI-powered radiology platform.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-medical-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-medical-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-medical-accent font-medium mb-2">
                      {info.details}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization/Hospital</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => handleInputChange('organization', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type *</Label>
                    <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Information</SelectItem>
                        <SelectItem value="demo">Product Demo</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Send className="mr-2 h-4 w-4 animate-pulse" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Departments */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Specialized Support Teams
                </h3>
                <p className="text-muted-foreground mb-8">
                  Connect directly with the right team for your specific needs.
                </p>
              </div>

              {departments.map((dept, index) => {
                const Icon = dept.icon;
                return (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-medical-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-medical-secondary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-1">
                            {dept.title}
                          </h4>
                          <p className="text-medical-accent font-medium mb-2">
                            {dept.email}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {dept.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* FAQ Link */}
              <Card className="bg-medical-muted/50 border-medical-accent/30">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-8 w-8 text-medical-accent mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Quick Answers
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Check our FAQ section for instant answers to common questions.
                  </p>
                  <Button variant="outline">
                    Visit FAQ Center
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 bg-gradient-to-r from-medical-warning/20 to-medical-warning/10 border-t border-medical-warning/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Emergency Support Available
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            For critical system issues or urgent medical needs that require immediate attention, 
            our emergency support team is available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-medical-warning hover:bg-medical-warning/90">
              <Phone className="mr-2 h-4 w-4" />
              Call Emergency Support
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Emergency Email
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;