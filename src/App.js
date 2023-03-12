import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Category from './Components/Category/Category/Category';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main/Main';
import News from './Components/News/News/News';
const router = createBrowserRouter([
  {
    path: '/', element: <Main />, children: [
      { path: '/', element: <Home /> },
      { path: '/news/:id', element: <News /> },
      { path: '/category/:id', element: <Category /> },
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
