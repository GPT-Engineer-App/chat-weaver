import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const ProjectSettings = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-y-0 right-0 w-80 bg-gray-900 text-white p-6 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Project Settings</h2>
        <Button variant="ghost" onClick={onClose}>X</Button>
      </div>
      
      <div className="space-y-6">
        <div>
          <Label htmlFor="projectName">Project Name</Label>
          <Input id="projectName" placeholder="Enter project name" className="mt-1" />
        </div>
        
        <div>
          <Label htmlFor="projectDescription">Project Description</Label>
          <Input id="projectDescription" placeholder="Enter project description" className="mt-1" />
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="visibility">Public Visibility</Label>
          <Switch id="visibility" />
        </div>
        
        <div>
          <Label htmlFor="githubUrl">GitHub URL</Label>
          <Input id="githubUrl" placeholder="Enter GitHub URL" className="mt-1" />
        </div>
        
        <Button className="w-full">Save Changes</Button>
      </div>
    </div>
  );
};

export default ProjectSettings;
