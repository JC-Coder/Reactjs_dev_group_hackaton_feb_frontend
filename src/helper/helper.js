import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";


 const defaultNotification = {
  title: "success message!",
  message: "teodosii@react-notifications-component",
  type: "success",
  insert: "top",
  container: "top-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 2000,
    onScreen: true,
  },
};


export const helperFunction = {
  getUserId: () => localStorage.getItem("userId"),
  
  notifySuccess(message) {
    Store.addNotification({
      ...defaultNotification,
      message,
    })
  },

  notifyFail(message) {
    Store.addNotification({
      ...defaultNotification,
      type: 'danger',
      title: "Error",
      message,
    })
  },

  notifyInfo(message) {
    Store.addNotification({
      ...defaultNotification,
      type: 'info',
      title: 'info',
      message,
    })
  }

}