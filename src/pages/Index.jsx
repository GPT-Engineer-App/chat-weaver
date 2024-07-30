import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');

  const handleCreateProject = () => {
    if (newProjectName.trim()) {
      setProjects([...projects, { id: Date.now(), name: newProjectName.trim() }]);
      setNewProjectName('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Claude Engineer</h1>
      <div className="mb-4 flex">
        <Input
          type="text"
          placeholder="New project name"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          className="mr-2"
        />
        <Button onClick={handleCreateProject}>Create Project</Button>
      </div>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id} className="bg-gray-100 p-3 rounded">
            <Link to={`/project/${project.id}`} className="text-blue-600 hover:underline">
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
