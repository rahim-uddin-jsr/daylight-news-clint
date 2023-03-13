import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Category from './Components/Category/Category/Category';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main/Main';
import News from './Components/News/News/News';
const router = createBrowserRouter([
  {
    path: '/', element: <Main />, children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/news')
      },
      {
        path: '/news/:id',
        element: <News />,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      },
      {
        path: '/category/:id',
        element: <Category />,
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
      },
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
