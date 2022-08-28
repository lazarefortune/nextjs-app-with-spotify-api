import Album from "./Album";
import Loader from "./Loader";
import Button from "./ui/Button";

function Albums( { albums, loading, error } ) {
    if (loading) {
        return <Loader/>;
    }

    if (error) {
        return <p>Error :(</p>;
    }
    return (
        <div className="grid grid-cols-2 p-4 py-4 overflow-scroll scrollbar-hide h-full lg:grid-cols-4 gap-x-4 gap-y-8">
            {albums &&
                albums.map((album) => (
                    <a key={album.id} href={`/album/${album.id}`}>
                        <Album album={album} />
                    </a>
                ))}
        </div>
    );
}

export default Albums;