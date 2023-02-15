import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./Layout";
import { Dj, Users } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <div>Page not Found</div>,
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <div>Welcome to the Club Music Request App</div>,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/DJ",
          element: <Dj />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
