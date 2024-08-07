import { useUsers } from "./App";
import Button from "./Button";

type ChildProps = {
  name: string;
};

// This is a functional component that takes in a prop called name of type string.
const Child = ({ name }: ChildProps) => {
  const { users } = useUsers();
  return (
    <>
      <div>{name}</div>
      <Button outline />
      <ul>
        {users.map((user) => {
          return (
            <>
              <li key={user.id}>{user.name}</li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Child;
