import { useEffect, useState } from "react";
import { getCharacters } from "../lib/getCharacters";
import UserDetail from "./CharacterDetail";

export type Character = {
  id: number;
  name: string;
  realName: string;
  universe: string;
  handleDelete: (id: number) => void;
};

function CharacterList() {
  const [charactersList, setCharactersList] = useState<Character[]>([]);

  const handleDelete = (id: number) => {
    const newList = charactersList.filter((user) => user.id !== id);
    setCharactersList(newList);
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await getCharacters();
      setCharactersList(data);
    };
    fetch();
  }, []);

  return (
    <div>
      <ul className="grid grid-cols-3 gap-5">
        {charactersList.map(({ id, name, realName, universe }: Character) => (
          <UserDetail
            id={id}
            name={name}
            realName={realName}
            universe={universe}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
