import { useState } from 'react';
import './App.css';

import Overview from './pages/Overview/Overview';
import Detail from './pages/Detail/Detail';

function App() {
  const [activeCountry, setActiveCountry] = useState(null);

  return (
    <main className="app">
      {!activeCountry && <Overview onCountrySelected={setActiveCountry} />}

      {activeCountry && (
        <Detail
          name={activeCountry}
          onCountryReset={() => {
            setActiveCountry(null);
          }}
        />
      )}
    </main>
  );
}

export default App;
