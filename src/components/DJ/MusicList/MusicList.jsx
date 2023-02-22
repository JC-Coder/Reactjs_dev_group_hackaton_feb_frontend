function MusicList({ children }) {
  return (
    <section className="py-4 flex overflow-x-scroll hide-scrollbar gap-3 max-w-full">
      {children}
    </section>
  );
}

export default MusicList;
