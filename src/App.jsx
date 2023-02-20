import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./Layout";
import { Dj, Users } from "./pages";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import axios from "axios";
import { apiConfig } from "./config/api";

function App() {
  const baseUrl = apiConfig.baseUrl;

  async function createUser() {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      const uniqueId = nanoid();
      console.log(uniqueId);

      // create user
      await axios
        .post(`${baseUrl}/users/new`, { userId: uniqueId })
        .then((response) => {
          if (response.status == 201) {
            localStorage.setItem("userId", uniqueId);
            window.location.reload(true);
          } else {
            return createUser();
          }
        });
    }
  }

  useEffect(() => {
    createUser();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <div>Page not Found</div>,
      children: [
        // {
        //   index: true,
        //   element: <div>Welcome to the Club Music Request App</div>,
        // },
        {
          path: "/",
          element: <Users />,
        },
        {
          path: "/dj",
          element: <Dj />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
