import { useEffect, useState } from "react";
import {  getCharacters } from "../lib/getCharacters";
import CharacterCard from "./CharacterCard";
import CreateCharacterModal from "./CreateCharacterModal";
import SearchBar from "./SearchBar";
import { Loader2 } from "lucide-react";

export type Character = {
  id: number;
  name: string;
  realName: string;
  universe: string;
};

export default function CharacterList() {
  const [charactersList, setCharactersList] = useState<Character[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await getCharacters();
        setCharactersList(data);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching characters:", err);
      }
    })();
  }, []);

  if (error) {
    return (
      <div className="w-screen h-fit flex items-center justify-center">
        <h1>Error: {error}</h1>
      </div>
    );
  }
  return (
    <div className="p-8 relative">
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setIsCreating(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          + Add Character
        </button>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {isCreating && (
        <CreateCharacterModal
          setCharactersList={setCharactersList}
          setIsCreating={setIsCreating}
        />
      )}

      {isLoading ? (
        <div className="w-screen h-[20vh] flex items-center justify-center">
          <Loader2 className="animate-spin h-10 w-10 text-blue-600" />
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchTerm === "" || !searchTerm
            ? charactersList.map((character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  setCharactersList={setCharactersList}
                />
              ))
            : charactersList
                .filter((char) =>
                  char.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((character) => (
                  <CharacterCard
                    key={character.id}
                    character={character}
                    setCharactersList={setCharactersList}
                  />
                ))}
        </ul>
      )}
    </div>
  );
}
