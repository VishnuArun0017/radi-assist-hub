import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  FileText, 
  Download, 
  Eye, 
  Search, 
  Filter,
  Calendar,
  User,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";
import Sidebar from "@/components/Layout/Sidebar";

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const reports = [
    {
      id: "RPT001",
      patientName: "John Smith",
      patientId: "PT001",
      scanType: "Chest CT",
      dateCreated: "2024-01-15",
      status: "Completed",
      aiConfidence: 98,
      findings: "No abnormalities detected. Lungs appear clear with normal cardiac silhouette.",
      priority: "Normal",
      reviewedBy: "Dr. Johnson",
      fileSize: "2.3 MB"
    },
    {
      id: "RPT002",
      patientName: "Sarah Wilson",
      patientId: "PT002", 
      scanType: "Brain MRI",
      dateCreated: "2024-01-14",
      status: "Under Review",
      aiConfidence: 85,
      findings: "Small hyperintense lesion detected in frontal lobe. Recommend further evaluation.",
      priority: "High",
      reviewedBy: "Pending",
      fileSize: "4.7 MB"
    },
    {
      id: "RPT003",
      patientName: "Mike Davis",
      patientId: "PT003",
      scanType: "Abdominal CT",
      dateCreated: "2024-01-13",
      status: "Completed",
      aiConfidence: 92,
      findings: "Mild hepatic steatosis observed. Inflammatory changes in ascending colon.",
      priority: "Medium",
      reviewedBy: "Dr. Smith",
      fileSize: "3.1 MB"
    },
    {
      id: "RPT004",
      patientName: "Emma Brown",
      patientId: "PT004",
      scanType: "Spine X-Ray",
      dateCreated: "2024-01-12",
      status: "Draft",
      aiConfidence: 94,
      findings: "Degenerative changes at L4-L5 level. No acute fractures detected.",
      priority: "Normal",
      reviewedBy: "Dr. Johnson",
      fileSize: "1.8 MB"
    },
    {
      id: "RPT005",
      patientName: "Robert Taylor",
      patientId: "PT005",
      scanType: "Chest X-Ray",
      dateCreated: "2024-01-11",
      status: "Completed",
      aiConfidence: 96,
      findings: "Normal chest radiograph. No acute cardiopulmonary abnormalities.",
      priority: "Normal",
      reviewedBy: "Dr. Wilson",
      fileSize: "1.2 MB"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-medical-success text-white";
      case "Under Review": return "bg-medical-warning text-white";
      case "Draft": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-red-500";
      case "Medium": return "text-yellow-500";
      default: return "text-green-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed": return CheckCircle;
      case "Under Review": return AlertTriangle;
      default: return Clock;
    }
  };

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.scanType.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || report.status.toLowerCase().replace(" ", "") === statusFilter;
    const matchesType = typeFilter === "all" || report.scanType.toLowerCase().includes(typeFilter.toLowerCase());
    
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Reports</h1>
            <p className="text-muted-foreground">View and manage all scan reports and AI analysis results</p>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by patient name, ID, or scan type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                
                <div className="flex gap-2">
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[140px]">
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="underreview">Under Review</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="ct">CT Scan</SelectItem>
                      <SelectItem value="mri">MRI</SelectItem>
                      <SelectItem value="xray">X-Ray</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredReports.map((report) => {
              const StatusIcon = getStatusIcon(report.status);
              
              return (
                <Card key={report.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg flex items-center">
                          <FileText className="mr-2 h-5 w-5 text-medical-secondary" />
                          {report.patientName}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {report.patientId} • {report.scanType}
                        </p>
                      </div>
                      <Badge className={getStatusColor(report.status)}>
                        <StatusIcon className="mr-1 h-3 w-3" />
                        {report.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Report Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{report.dateCreated}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{report.reviewedBy}</span>
                      </div>
                    </div>

                    {/* AI Confidence & Priority */}
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <span className="text-muted-foreground">AI Confidence: </span>
                        <span className="font-medium text-medical-accent">{report.aiConfidence}%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-muted-foreground mr-2">Priority:</span>
                        <span className={`font-medium ${getPriorityColor(report.priority)}`}>
                          {report.priority}
                        </span>
                      </div>
                    </div>

                    {/* Findings Preview */}
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Key Findings:</p>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {report.findings}
                      </p>
                    </div>

                    {/* File Info */}
                    <div className="text-xs text-muted-foreground">
                      Report ID: {report.id} • Size: {report.fileSize}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2 border-t">
                      <Button size="sm" variant="default" className="flex-1">
                        <Eye className="mr-2 h-4 w-4" />
                        View Report
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredReports.length === 0 && (
            <Card className="text-center py-16">
              <CardContent>
                <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No Reports Found</h3>
                <p className="text-muted-foreground mb-4">
                  No reports match your current search criteria.
                </p>
                <Button variant="outline" onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("all");
                  setTypeFilter("all");
                }}>
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};

export default Reports;