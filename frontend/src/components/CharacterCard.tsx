import type { Character } from "./CharacterList";
import { Trash2, User, IdCard, Film, Globe } from "lucide-react";

export default function CharacterCard({
  id,
  name,
  realName,
  universe,
  handleDelete,
}: Character) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 flex flex-col gap-3 border border-gray-200 hover:shadow-lg transition">
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-700 flex items-center gap-2">
          <IdCard className="w-4 h-4 text-gray-500" />
          ID: <span className="font-normal text-gray-900">{id}</span>
        </h3>

        <h3 className="font-semibold text-gray-700 flex items-center gap-2">
          <Film className="w-4 h-4 text-blue-500" />
          Scene Name: <span className="font-normal text-blue-800">{name}</span>
        </h3>

        <h3 className="font-semibold text-gray-700 flex items-center gap-2">
          <User className="w-4 h-4 text-gray-500" />
          Real Name:{" "}
          <span className="font-normal text-gray-900">{realName}</span>
        </h3>

        <h3 className="font-semibold text-gray-700 flex items-center gap-2">
          <Globe className="w-4 h-4 text-purple-500" />
          Universe:{" "}
          <span className="font-normal text-purple-700">{universe}</span>
        </h3>
      </div>

      <button
        onClick={() => handleDelete(id)}
        className="mt-4 flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition cursor-pointer"
      >
        <Trash2 className="w-5 h-5" />
        Delete
      </button>
    </div>
  );
}
