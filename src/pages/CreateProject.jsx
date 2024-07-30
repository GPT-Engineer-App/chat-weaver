import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CreateProject = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the project data to your backend
    // For now, we'll just simulate creating a project and redirecting
    console.log('Creating project:', { projectName, projectDescription });
    // Redirect to a new project page with a random ID
    const newProjectId = Math.floor(Math.random() * 1000);
    navigate(`/project/${newProjectId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="projectName" className="block mb-2">Project Name</label>
          <Input
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="projectDescription" className="block mb-2">Project Description</label>
          <Textarea
            id="projectDescription"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            rows={4}
          />
        </div>
        <Button type="submit">Create Project</Button>
      </form>
    </div>
  );
};

export default CreateProject;
