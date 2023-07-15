import { Routes, Route } from 'react-router-dom';

import './App.css';

import Overview from './pages/Overview/Overview';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/country/:countryId" element={<Detail />} />
        <Route path="*" element={<Overview />} />
      </Routes>
    </main>
  );
}

export default App;
