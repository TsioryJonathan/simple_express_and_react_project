import type { Character } from "./CharacterList";
import { Trash2, User, IdCard, Film, Pencil, Loader2 } from "lucide-react";
import EditCharacterModal from "./EditModal";
import { useState, type Dispatch, type SetStateAction } from "react";
import { API_URL } from "@/lib/getCharacters";

type Props = {
  character: Character & { image?: string };
  setCharactersList: Dispatch<SetStateAction<Character[]>>;
};

function InfoRow({
  icon: Icon,
  text,
  className = "",
}: {
  icon: React.ElementType;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 justify-start font-comic text-base text-white/80 ${className}`}
    >
      <Icon className="w-4 h-4" />
      <span className="font-comic">{text}</span>
    </div>
  );
}

export default function CharacterCard({ character, setCharactersList }: Props) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async (id: number) => {
    try {
      setIsDeleting(true);
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete character");
      const updatedList = await res.json();
      setCharactersList(updatedList);
    } catch (err) {
      console.error("Error deleting character:", err);
    } finally {
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
      <div
        className="
          relative bg-[#181a24] shadow-xl rounded-2xl px-6 py-7 flex flex-col items-center
          border border-white/10 transition-all duration-300 hover:scale-[1.03] min-h-[430px]
        "
      >
        <div className="absolute top-5 left-5 px-3 py-1 bg-white/10 rounded-full font-comic text-xs uppercase tracking-widest text-white/80">
          {character.universe}
        </div>

        {character.image && (
          <div className="flex justify-center mb-5 mt-2 z-10">
            <img
              src={character.image}
              alt={character.name}
              className="w-36 h-36 rounded-xl border-2 border-white/20 object-cover shadow-lg bg-white/5"
              loading="lazy"
            />
          </div>
        )}

        <h2 className="text-white text-2xl font-bangers text-center mb-1">
          {character.name}
        </h2>

        <div className="w-full space-y-1 mt-2">
          <InfoRow icon={IdCard} text={`ID: ${character.id}`} />
          <InfoRow
            icon={User}
            text={`Real Name: ${character.realName}`}
            className="text-blue-200"
          />
          <InfoRow
            icon={Film}
            text={`Scene: ${character.name}`}
            className="text-red-200"
          />
        </div>

        <div className="flex gap-2 w-full mt-5">
          <button
            onClick={() => handleDelete(character.id)}
            className="flex-1 flex items-center justify-center gap-2 bg-red-600/90 text-white py-2 rounded-lg font-comic font-semibold shadow hover:bg-red-700 transition"
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
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600/90 text-white py-2 rounded-lg font-comic font-semibold shadow hover:bg-blue-700 transition"
          >
            <Pencil className="w-4 h-4" />
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
