import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload as UploadIcon, FileImage, User, Calendar, AlertCircle } from "lucide-react";
import Sidebar from "@/components/Layout/Sidebar";
import { useToast } from "@/components/ui/use-toast";

const Upload = () => {
  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    patientName: "",
    patientId: "",
    dateOfBirth: "",
    scanType: "",
    bodyPart: "",
    urgency: "",
    clinicalHistory: "",
    symptoms: ""
  });

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      toast({
        title: "Error",
        description: "Please select a scan file to upload",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);

    // Simulate upload and AI processing
    setTimeout(() => {
      setIsUploading(false);
      toast({
        title: "Upload Successful",
        description: "Scan uploaded successfully. AI analysis in progress...",
      });
      
      // Reset form
      setSelectedFile(null);
      setFormData({
        patientName: "",
        patientId: "",
        dateOfBirth: "",
        scanType: "",
        bodyPart: "",
        urgency: "",
        clinicalHistory: "",
        symptoms: ""
      });
    }, 3000);
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <main className="p-6 max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Upload Scan</h1>
            <p className="text-muted-foreground">Upload patient scan files for AI-powered analysis</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* File Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileImage className="mr-2 h-5 w-5" />
                  Scan File
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragOver 
                      ? 'border-medical-accent bg-medical-accent/10' 
                      : 'border-border hover:border-medical-accent/50'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {selectedFile ? (
                    <div className="space-y-4">
                      <FileImage className="mx-auto h-12 w-12 text-medical-success" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{selectedFile.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedFile(null)}
                      >
                        Remove File
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <UploadIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                      <div>
                        <p className="text-lg font-medium text-foreground mb-2">
                          Drop your scan files here
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Supported formats: DICOM, JPEG, PNG, TIFF
                        </p>
                      </div>
                      <div>
                        <input
                          type="file"
                          id="file-upload"
                          className="hidden"
                          accept=".dcm,.jpg,.jpeg,.png,.tiff"
                          onChange={handleFileSelect}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById('file-upload')?.click()}
                        >
                          Browse Files
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Patient Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Patient Information
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="patientName">Patient Name *</Label>
                  <Input
                    id="patientName"
                    value={formData.patientName}
                    onChange={(e) => handleInputChange('patientName', e.target.value)}
                    placeholder="Full patient name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="patientId">Patient ID *</Label>
                  <Input
                    id="patientId"
                    value={formData.patientId}
                    onChange={(e) => handleInputChange('patientId', e.target.value)}
                    placeholder="Unique patient identifier"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="routine">Routine</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Scan Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Scan Details
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="scanType">Scan Type *</Label>
                  <Select value={formData.scanType} onValueChange={(value) => handleInputChange('scanType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select scan type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ct">CT Scan</SelectItem>
                      <SelectItem value="mri">MRI</SelectItem>
                      <SelectItem value="xray">X-Ray</SelectItem>
                      <SelectItem value="ultrasound">Ultrasound</SelectItem>
                      <SelectItem value="pet">PET Scan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bodyPart">Body Part/Region *</Label>
                  <Select value={formData.bodyPart} onValueChange={(value) => handleInputChange('bodyPart', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select body part" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="head">Head/Brain</SelectItem>
                      <SelectItem value="chest">Chest</SelectItem>
                      <SelectItem value="abdomen">Abdomen</SelectItem>
                      <SelectItem value="pelvis">Pelvis</SelectItem>
                      <SelectItem value="spine">Spine</SelectItem>
                      <SelectItem value="extremities">Extremities</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="clinicalHistory">Clinical History</Label>
                  <Textarea
                    id="clinicalHistory"
                    value={formData.clinicalHistory}
                    onChange={(e) => handleInputChange('clinicalHistory', e.target.value)}
                    placeholder="Relevant medical history and background information"
                    rows={3}
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="symptoms">Current Symptoms</Label>
                  <Textarea
                    id="symptoms"
                    value={formData.symptoms}
                    onChange={(e) => handleInputChange('symptoms', e.target.value)}
                    placeholder="Patient's current symptoms and concerns"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* AI Processing Notice */}
            <Card className="bg-medical-muted/50 border-medical-accent/30">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-medical-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      AI Analysis Notice
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Your uploaded scan will be processed by our AI system to provide preliminary 
                      findings and suggestions. This analysis is meant to assist and should not 
                      replace professional medical judgment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button 
                type="submit" 
                size="lg"
                disabled={isUploading || !selectedFile}
                className="min-w-[200px]"
              >
                {isUploading ? (
                  <>
                    <UploadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <UploadIcon className="mr-2 h-4 w-4" />
                    Upload & Analyze
                  </>
                )}
              </Button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Upload;