import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './shared/Router';
import './App.css';
import Sidebar from './components/Sidebar';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client = {queryClient}>

      <Router />

    </QueryClientProvider>
    
  )
}

export default App;
