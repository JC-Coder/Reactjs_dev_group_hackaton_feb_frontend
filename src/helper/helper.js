import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const helperFunction = {
  getUserId: () => localStorage.getItem("userId"),
  notifySuccess: (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "colored",
    });
  },
  notifyFail: (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "colored",
    });
  },
};
