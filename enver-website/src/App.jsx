import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <h1>Welcome to Home Page</h1>
       <button onClick={() => {
        setIsLoggedIn(true);
        navigate('/second');
      }}>
        Login
      </button>
    </div>
  );
}
function SecondPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Second Page</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  );
}

export default App;