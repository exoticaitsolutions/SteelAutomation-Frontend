import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/css/main.css';
import '../src/css/logIn.css';

import AddClient from './Pages/Add_Client';
import AddProject from './Pages/Add_Project';
import AddContract from './Pages/Add_Contract';
import Dashboard from './Pages/Dashboard';
import Slip from './Pages/Slip';
import Slip2 from './Pages/Slip2';
import LogIn from './Pages/LogIn';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<LogIn />} />

        <Route path="/" element={<Dashboard />} />
        <Route path="/add_client" element={<AddClient />} />
        <Route path="/add_project" element={<AddProject />} />
        <Route path="/add_contract" element={<AddContract />} />

        <Route path="/slip" element={<Slip />} />
        <Route path="/slip2" element={<Slip2 />} />

        
      </Routes>
    </Router>

  );
}

export default App;
