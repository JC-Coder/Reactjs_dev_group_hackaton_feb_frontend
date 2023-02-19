import { useState } from "react";
import NotificationCtx from "./NotificationCtx";

function NotificationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNotification = () => {
    setIsOpen((prevState) => !prevState);
  };

  const context = {
    isOpen,
    toggleNotification,
  };

  return (
    <NotificationCtx.Provider value={context}>
      {children}
    </NotificationCtx.Provider>
  );
}

export default NotificationProvider;
