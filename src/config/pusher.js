import Pusher from "pusher-js";

export const pusherInstance = new Pusher("564d257a0600fa9948fc", {
  cluster: "eu",
});
export var channel = pusherInstance.subscribe("gd-channel");
export const unsubscribePusherInstance = () => {
  pusherInstance.unsubscribe("gd-channel");
}
