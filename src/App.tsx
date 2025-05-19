
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Xinverzao from "./pages/Xinverzao";
import Admin from "./pages/Admin";
import Support from "./pages/Support";
import Quote from "./pages/Quote";
import Payment from "./pages/Payment";
import Differentiators from "./pages/Differentiators";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={
            <TooltipProvider>
              <Index />
            </TooltipProvider>
          } />
          {/* Páginas principais */}
          <Route path="/suporte" element={<Support />} />
          <Route path="/orcamento" element={<Quote />} />
          <Route path="/diferenciais" element={<Differentiators />} />
          
          {/* Páginas ocultas */}
          <Route path="/pagamento" element={<Payment />} />
          <Route path="/xinverzao" element={<Xinverzao />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
