import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
let array = [Task('Aprender React'),Task('Resolver em React'),Task('Aprender Angular')]

function App() {
  return (
    <div className="App">
      {array}
    </div>
  );
}

export default App;
