import SearchBar from "./SearchBar";

function Body({ session }) {
  // On peut faire ça parce que le Body n'est visible que si le parent a la session
  // Attention: On peut faire mieux que ça, c'est juste un exemple

  const { user } = session;

  return (
    <section className="bg-black text-white ml-24 py-4 space-y-8 md:max-w-6xl flex-grow md:mr-2.5">
      {/* Le composant barre de recherche contient aussi les résultats */}
      <SearchBar />
      
      <div
        className="grid grid-cols-2 py-4 overflow-y-scroll 
      scrollbar-hide h-96 lg:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-8"
      >
        
        {user && <h1 className="text-center">Bonjour {user.name}</h1>}
      </div>
    </section>
  );
}

export default Body;
