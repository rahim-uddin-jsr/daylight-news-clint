import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Category from './Components/Category/Category/Category';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main/Main';
import Login from './Components/Login/Login';
import News from './Components/News/News/News';
import Register from './Components/Register/Register';
import ResetPassword from './Components/ResetPassword/ResetPassword';
const router = createBrowserRouter([
  {
    path: '/', element: <Main />, children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/news')
      },
      {
        path: '/home',
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
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/reset-password',
        element: <ResetPassword />,
      }

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
