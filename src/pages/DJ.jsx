import { useEffect } from "react";
import SongRequestsDj from "../components/SongRequestsDj";

function Dj() {
  useEffect(() => {
    const djAuthenticated = localStorage.getItem("isDjAuthenticated");
    if (djAuthenticated != "yes") {
      window.location = "/auth";
    }
  }, []);

  return (
    <div>
      <main>
        <SongRequestsDj />
      </main>
    </div>
  );
}

export default Dj;
