
import {useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';

function App() {
  const [Enroll, setEnroll] = useState([])
 
  return (
    <div className="App">
      <Navbar />
      <Form enroll={Enroll} setEnroll={setEnroll} />
      <Profile enroll={Enroll} />
    </div>
  );
}

export default App;
