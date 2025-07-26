import type { User } from "./UserList";

function UserDetail({ id, name, realName, universe, handleDelete }: User) {
  return (
    <div>
      <h3 className="font-bold">
        Id: <span className="font-normal">{id}</span>
      </h3>
      <h3 className="font-bold">
        Scene Name: <span className="font-normal">{name}</span>
      </h3>
      <h3 className="font-bold">
        Real Name: <span className="font-normal">{realName}</span>
      </h3>
      <h3 className="font-bold">
        Universe: <span className="font-normal">{universe}</span>
      </h3>

      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}

export default UserDetail;
