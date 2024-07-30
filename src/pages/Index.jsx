import { Button } from "@/components/ui/button";
import { Heart, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Heart className="w-6 h-6 mr-2" />
          <span className="font-bold">lovable</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>GPT Engineer</li>
            <li>Vision</li>
            <li>News</li>
            <li>Careers</li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto text-center mt-20">
        <Link to="/create-project">
          <Button variant="outline" className="mb-8">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Project
          </Button>
        </Link>
        <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-orange-400 via-green-300 to-blue-500 rounded-full"></div>
        <h1 className="text-5xl font-bold mb-4">The last piece of software.</h1>
        <p className="text-xl mb-8">
          We're building software that builds software. Our <span className="underline">vision</span> is to unlock<br />
          human creativity — by enabling anyone to create software.
        </p>
        <div className="flex items-center justify-center mb-8">
          <img src="/placeholder.svg" alt="GPT Engineer" className="w-6 h-6 mr-2" />
          <span className="text-2xl font-semibold">It starts with an AI software engineer.</span>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          <Button variant="outline" className="p-6 h-auto flex flex-col items-start">
            <span className="text-lg font-semibold mb-2">For Everyone</span>
            <span className="text-sm text-left">Chat with AI to build and deploy web apps, with no technical knowledge needed.</span>
          </Button>
          <Button variant="outline" className="p-6 h-auto flex flex-col items-start">
            <span className="text-lg font-semibold mb-2">For Developers</span>
            <span className="text-sm text-left">Collaborate in chat and code with an AI engineer, to build at lightning speed.</span>
          </Button>
          <Button variant="outline" className="p-6 h-auto flex flex-col items-start">
            <span className="text-lg font-semibold mb-2">For Agencies</span>
            <span className="text-sm text-left">Partner with AI to streamline web app creation, iteration, and support.</span>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
