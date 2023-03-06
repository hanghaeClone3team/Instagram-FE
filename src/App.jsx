import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './shared/Router';
import { CookiesProvider } from 'react-cookie';
import './App.css';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Router />
      </CookiesProvider>
    </QueryClientProvider>

  )
}

export default App;
