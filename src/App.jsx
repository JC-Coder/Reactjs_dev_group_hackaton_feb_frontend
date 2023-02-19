import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./Layout";
import { Users, Dj } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <div>Page not Found</div>,
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Users />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "dj",
          element: <Dj />,
          errorElement: <div>Page not Found</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
