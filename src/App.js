import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main/Main';
const router = createBrowserRouter([
  {
    path: '/', element: <Main />, children: [
      { path: '/', element: <Home /> }
    ]
  },
])
function App() {

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
