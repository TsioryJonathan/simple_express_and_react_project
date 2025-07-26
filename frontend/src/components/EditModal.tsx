import { useState } from "react";
import { X, Pencil, Film, User, Globe } from "lucide-react";
import type { Character } from "./CharacterList";

type Props = {
  character: Character;
  setCharactersList: (list: Character[]) => void;
  setIsEditing: (b: boolean) => void;
};

export default function EditCharacterModal({
  character,
  setCharactersList,
  setIsEditing,
}: Props) {
  const [sceneName, setSceneName] = useState(character.name);
  const [realName, setRealName] = useState(character.realName);
  const [universe, setUniverse] = useState(character.universe);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/${character.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: sceneName, realName, universe }),
      });
      if (!res.ok) throw new Error("Update failed");
      const updated = await res.json();
      setCharactersList(updated);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8">
        <button
          onClick={() => setIsEditing(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-2 mb-6">
          <Pencil className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Edit Character</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Film className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
            <input
              type="text"
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={sceneName}
              onChange={(e) => setSceneName(e.target.value)}
              placeholder="Scene Name"
              required
            />
          </div>

          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 w-5 h-5" />
            <input
              type="text"
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={realName}
              onChange={(e) => setRealName(e.target.value)}
              placeholder="Real Name"
              required
            />
          </div>

          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-500 w-5 h-5" />
            <input
              type="text"
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={universe}
              onChange={(e) => setUniverse(e.target.value)}
              placeholder="Universe"
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <Pencil className="w-5 h-5" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
