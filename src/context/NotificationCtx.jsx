import React from "react";

const NotificationCtx = React.createContext({
  isOpen: false,
  toggleNotification: () => {},
});

export default NotificationCtx;
