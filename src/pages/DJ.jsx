import { NavigationDj } from "../components/DJ";
import MusicList from "../components/DJ/MusicList/MusicList";
import ListItem from "../components/DJ/MusicList/ListItem";
import allData from "../assets/data";
import { NotificationBar } from "../Layout";
import { useContext } from "react";
import NotificationCtx from "../context/NotificationCtx";

function DJ() {
  const notificationCtx = useContext(NotificationCtx);

  const { isOpen } = notificationCtx;
  const allMusic = allData.map((music) => (
    <ListItem
      title={music.title}
      name={music.name}
      key={music.id}
      id={music.id}
    />
  ));

  return (
    <>
      <NavigationDj />

      {isOpen && <NotificationBar />}
      <section className="dj-sections ">
        <h1 className="text-2xl font-bold">All Requests</h1>
        <MusicList>{allMusic}</MusicList>
      </section>
      <section className="dj-sections">
        <h1 className="text-2xl font-bold">Played </h1>
        <MusicList>{allMusic}</MusicList>
      </section>
      <section className="dj-sections">
        <h1 className="text-2xl font-bold">Unavailable</h1>
        <MusicList>{allMusic}</MusicList>
      </section>
    </>
  );
}

export default DJ;
