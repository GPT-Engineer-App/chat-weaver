import { Home, PlusCircle } from "lucide-react";
import Index from "./pages/Index.jsx";
import CreateProject from "./pages/CreateProject.jsx";
import Project from "./pages/Project.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Create Project",
    to: "/create-project",
    icon: <PlusCircle className="h-4 w-4" />,
    page: <CreateProject />,
  },
  {
    title: "Project",
    to: "/project/:id",
    page: <Project />,
    hidden: true, // This route won't appear in navigation but will be available for routing
  },
];
