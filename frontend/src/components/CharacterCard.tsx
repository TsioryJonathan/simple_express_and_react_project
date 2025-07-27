import type { Character } from "./CharacterList";
import {
  Trash2,
  User,
  IdCard,
  Film,
  Globe,
  Pencil,
  Loader2,
} from "lucide-react";
import EditCharacterModal from "./EditModal";
import { useState, type Dispatch, type SetStateAction } from "react";
import { API_URL } from "@/lib/getCharacters";
type Props = {
  character: Character;
  setCharactersList: Dispatch<SetStateAction<Character[]>>;
};

export default function CharacterCard({ character, setCharactersList }: Props) {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const handleDelete = async (id: number) => {
    try {
      setIsDeleting(true);
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete character");

      const updatedList = await res.json();
      setCharactersList(updatedList);
      setIsDeleting(false);
    } catch (err) {
      console.error("Error deleting character:", err);
      setIsDeleting(false);
    }
  };

  return (
    <>
      {isEditing && (
        <EditCharacterModal
          character={{ ...character }}
          setIsEditing={setIsEditing}
          setCharactersList={setCharactersList}
        />
      )}
      <div className="bg-white shadow-md rounded-xl p-5 flex flex-col gap-3 border border-gray-200 hover:shadow-lg transition">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700 flex items-center gap-2">
            <IdCard className="w-4 h-4 text-gray-500" />
            ID:{" "}
            <span className="font-normal text-gray-900">{character.id}</span>
          </h3>

          <h3 className="font-semibold text-gray-700 flex items-center gap-2">
            <Film className="w-4 h-4 text-blue-500" />
            Scene Name:{" "}
            <span className="font-normal text-blue-800">{character.name}</span>
          </h3>

          <h3 className="font-semibold text-gray-700 flex items-center gap-2">
            <User className="w-4 h-4 text-gray-500" />
            Real Name:{" "}
            <span className="font-normal text-gray-900">
              {character.realName}
            </span>
          </h3>

          <h3 className="font-semibold text-gray-700 flex items-center gap-2">
            <Globe className="w-4 h-4 text-purple-500" />
            Universe:{" "}
            <span className="font-normal text-purple-700">
              {character.universe}
            </span>
          </h3>
        </div>

        <div className="flex gap-2 w-full">
          <button
            onClick={() => {
              handleDelete(character.id);
            }}
            className="mt-4 flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition cursor-pointer flex-1"
          >
            {isDeleting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Trash2 className="w-5 h-5" />
            )}
            Delete
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 flex items-center justify-center gap-2 bg-yellow-400 text-white py-2 px-4 rounded-lg hover:bg-yellow-500 transition cursor-pointer flex-1"
          >
            <Pencil className="w-4 h-4" />
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
