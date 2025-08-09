import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Upload, 
  FileText, 
  Users, 
  Clock,
  TrendingUp,
  AlertCircle,
  CheckCircle 
} from "lucide-react";
import Sidebar from "@/components/Layout/Sidebar";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Scans",
      value: "1,247",
      change: "+12%",
      icon: Activity,
      color: "text-medical-primary"
    },
    {
      title: "Pending Reviews",
      value: "23",
      change: "-5%",
      icon: Clock,
      color: "text-medical-warning"
    },
    {
      title: "Completed Today",
      value: "18",
      change: "+8%",
      icon: CheckCircle,
      color: "text-medical-success"
    },
    {
      title: "AI Accuracy",
      value: "98.5%",
      change: "+0.3%",
      icon: TrendingUp,
      color: "text-medical-accent"
    }
  ];

  const recentScans = [
    {
      id: "SC001",
      patient: "John Smith",
      type: "Chest CT",
      status: "Completed",
      aiSuggestion: "No abnormalities detected",
      timestamp: "2 hours ago",
      priority: "Normal"
    },
    {
      id: "SC002", 
      patient: "Sarah Johnson",
      type: "Brain MRI",
      status: "Under Review",
      aiSuggestion: "Possible lesion detected - requires review",
      timestamp: "4 hours ago",
      priority: "High"
    },
    {
      id: "SC003",
      patient: "Mike Davis",
      type: "Abdominal CT",
      status: "Completed",
      aiSuggestion: "Inflammation indicators present",
      timestamp: "6 hours ago",
      priority: "Medium"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-500";
      case "Medium": return "bg-yellow-500";
      default: return "bg-green-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-medical-success";
      case "Under Review": return "bg-medical-warning";
      default: return "bg-muted";
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Dr. Johnson. Here's your practice overview.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-foreground">
                          {stat.value}
                        </p>
                        <p className="text-xs text-medical-success">
                          {stat.change} from last month
                        </p>
                      </div>
                      <Icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Scans */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Recent Scans</span>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentScans.map((scan) => (
                      <div key={scan.id} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
                        <div className={`w-3 h-3 rounded-full ${getPriorityColor(scan.priority)}`} />
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-sm font-medium text-foreground">
                              {scan.patient} - {scan.type}
                            </p>
                            <Badge 
                              variant="secondary"
                              className={`${getStatusColor(scan.status)} text-white`}
                            >
                              {scan.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">
                            ID: {scan.id} • {scan.timestamp}
                          </p>
                          <p className="text-sm text-foreground">
                            <span className="font-medium">AI Suggestion:</span> {scan.aiSuggestion}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions & Alerts */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="default">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload New Scan
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Generate Report
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    Patient Records
                  </Button>
                </CardContent>
              </Card>

              {/* Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="mr-2 h-5 w-5 text-medical-warning" />
                    System Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-medical-warning/20 border border-medical-warning/30">
                      <p className="text-sm font-medium text-foreground mb-1">
                        High Priority Review
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Brain MRI scan requires immediate attention
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-medical-success/20 border border-medical-success/30">
                      <p className="text-sm font-medium text-foreground mb-1">
                        System Update
                      </p>
                      <p className="text-xs text-muted-foreground">
                        AI model updated successfully
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI Performance */}
              <Card>
                <CardHeader>
                  <CardTitle>AI Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Diagnostic Accuracy</span>
                        <span className="font-medium">98.5%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-medical-success h-2 rounded-full" style={{width: "98.5%"}} />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Processing Speed</span>
                        <span className="font-medium">94%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-medical-accent h-2 rounded-full" style={{width: "94%"}} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;