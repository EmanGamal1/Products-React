import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;
