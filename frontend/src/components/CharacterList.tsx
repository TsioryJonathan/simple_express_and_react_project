import { useEffect, useState } from "react";
import { API_URL, getCharacters } from "../lib/getCharacters";
import CharacterCard from "./CharacterCard";
import CreateCharacterModal from "./CreateCharacterModal";
import SearchBar from "./SearchBar";

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

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete character");

      const updatedList = await res.json();
      setCharactersList(updatedList);
    } catch (err) {
      console.error("Error deleting character:", err);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await getCharacters();
        setCharactersList(data);
      } catch (err) {
        console.error("Error fetching characters:", err);
      }
    })();
  }, []);

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

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchTerm === "" || !searchTerm
          ? charactersList.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                handleDelete={handleDelete}
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
                  handleDelete={handleDelete}
                  setCharactersList={setCharactersList}
                />
              ))}
      </ul>
    </div>
  );
}
