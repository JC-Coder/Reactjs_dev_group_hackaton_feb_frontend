import { Outlet } from "react-router-dom";
import { Navigation } from ".";

function RootLayout() {
  return (
    <main className="max-w-[1220px] mx-auto px-4 py-2">
      <Navigation />
      <Outlet />
    </main>
  );
}

export default RootLayout;
