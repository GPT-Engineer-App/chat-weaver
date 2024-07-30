import { Home, FolderOpen } from "lucide-react";
import Index from "./pages/Index.jsx";
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
    title: "Project",
    to: "/project/:id",
    icon: <FolderOpen className="h-4 w-4" />,
    page: <Project />,
  },
];
