import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { RootRouter } from './Router/RootRouter';


function App() {
  return (
    <BrowserRouter>
      <RootRouter/>
    </BrowserRouter>
  );
}

export default App;
