import Song from "./Song";
import Loader from "./Loader";

function ListSongs({ songs, loading, error }) {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {props.error.message}</div>;
  }

  if (songs.length === 0) {
    return <div className="text-blue-400">Aucun résultat</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {songs.map((song) => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
}

export default ListSongs;
