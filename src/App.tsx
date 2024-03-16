import { QueryClient, QueryClientProvider } from 'react-query';
import dotenv from 'dotenv';

import { Menu } from './components/Menu';
import { Blog } from './pages/Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Description } from './pages/Description';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Router>
          <Menu />
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/description" element={<Description />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
