import './App.css';
import useLocalStorage from './useLocalStorage';
import useLogger from './useLogger';

function App() {
  const [name, setName] = useLocalStorage("name", "")
  useLogger(name)
  return (
    <div className="App">
      <label htmlFor="Name">Name</label>
     <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
    </div>
  );
}

export default App;
