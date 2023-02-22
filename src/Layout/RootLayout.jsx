import { Outlet } from "react-router-dom";
import { Navigation } from ".";

function RootLayout() {
  return (
    <main>
      {/* <Navigation /> */}
      <Outlet />
    </main>
  );
}

export default RootLayout;
