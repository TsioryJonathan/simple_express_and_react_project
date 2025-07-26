import { useEffect, useState } from "react";
import { getUsers } from "../lib/getUsers";
import UserDetail from "./UserDetail";

export type User = {
  id: number;
  name: string;
  realName: string;
  universe: string;
  handleDelete: (id: number) => void;
};

function UserList() {
  const [usersList, setUsersList] = useState<User[]>([]);

  const handleDelete = (id: number) => {
    const newList = usersList.filter((user) => user.id !== id);
    setUsersList(newList);
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await getUsers();
      setUsersList(data);
    };
    fetch();
  }, []);

  return (
    <div>
      <ul className="grid grid-cols-3 gap-5">
        {usersList.map(({ id, name, realName, universe }: User) => (
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

export default UserList;
