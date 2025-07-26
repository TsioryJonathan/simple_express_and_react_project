import { useState } from "react";
import { API_URL } from "../lib/getCharacters";
import type { Character } from "./CharacterList";

type Props = {
  setCharactersList: (newList: Character[]) => void;
  setIsCreating: (isCreating: boolean) => void;
};

export default function CreateCharacterModal({
  setCharactersList,
  setIsCreating,
}: Props) {
  const [sceneName, setSceneName] = useState("");
  const [realName, setRealName] = useState("");
  const [universe, setUniverse] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCharacter = {
      name: sceneName,
      realName,
      universe,
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCharacter),
      });

      if (!res.ok) throw new Error("Failed to create character");

      const updatedList = await res.json();
      setCharactersList(updatedList);
      setSceneName("");
      setRealName("");
      setUniverse("");
      setIsCreating(false);
    } catch (err) {
      console.error("Error creating character:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-blue-600/50 backdrop-blur-2xl flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl relative">
        <button
          onClick={() => setIsCreating(false)}
          className="absolute top-3 right-4 text-xl text-gray-500 hover:text-red-600"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">
          Create a Character
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Scene Name"
            value={sceneName}
            onChange={(e) => setSceneName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Real Name"
            value={realName}
            onChange={(e) => setRealName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Universe"
            value={universe}
            onChange={(e) => setUniverse(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Create Character
          </button>
        </form>
      </div>
    </div>
  );
}
