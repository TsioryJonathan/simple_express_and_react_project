import { useEffect, useState } from "react";
import { API_URL, getCharacters } from "../lib/getCharacters";
import UserDetail from "./CharacterCard";
import CreateCharacterModal from "./CreateCharacterModal";

export type Character = {
  id: number;
  name: string;
  realName: string;
  universe: string;
  handleDelete: (id: number) => void;
};

export default function CharacterList() {
  const [charactersList, setCharactersList] = useState<Character[]>([]);
  const [isCreating, setIsCreating] = useState(false);

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
      </div>

      {isCreating && (
        <CreateCharacterModal
          setCharactersList={setCharactersList}
          setIsCreating={setIsCreating}
        />
      )}

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {charactersList.map((character) => (
          <UserDetail
            key={character.id}
            {...character}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
