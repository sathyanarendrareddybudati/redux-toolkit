import './App.css';
import Login from './components/login';
import { Profile } from './components/profile';
import ChangeColor from './components/change.color';

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
