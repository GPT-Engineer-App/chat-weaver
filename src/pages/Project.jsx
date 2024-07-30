import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ProjectSettings from './ProjectSettings';

const Project = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
      setInput('');
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now(), text: "I'm Claude, your AI assistant. How can I help you build your website?", sender: 'ai' }]);
      }, 1000);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Project {id}</h1>
        <div className="flex-1 bg-white p-4 rounded-lg shadow overflow-y-auto mb-4">
          {messages.map((message) => (
            <div key={message.id} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-900'}`}>
                {message.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="mr-2 flex-1"
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
      <Button
        className="fixed top-4 right-4 z-10"
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
      >
        {isSettingsOpen ? 'Close Settings' : 'Open Settings'}
      </Button>
      <ProjectSettings isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </div>
  );
};

export default Project;
