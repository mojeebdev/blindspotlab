import React from "react";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import AuditPage from "./pages/Audit"; 
import Capabilities from "./pages/Capabilities"; 
import NotFound from "./pages/NotFound";
import Research from "./pages/Research";
import Signals from "./pages/Signals";


import ContactPage from "./pages/contact"; 
import ContactSuccess from "./pages/contact/success";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/audit" element={<AuditPage />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/research" element={<Research />} />
          <Route path="/signals" element={<Signals />} />
          
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/success" element={<ContactSuccess />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;