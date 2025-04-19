import Profile from "./Profile";
import useService from "../hooks/useService";
import { User } from "../types";
import { useEffect, useState } from "react";

type ProfileListProps= {
  users?: User[]
};

export default function ProfileList(props: ProfileListProps) {
  const [ users, setUsers] = useState<User[]>(props.users ?? []);

  const service = useService();
  useEffect(() => {
    if (! (users?.length)) {
      service.getUsers().then((users) => {
        setUsers(users);
      });
    }
  }, [ ]);

  function handleDelete(user: User) {
    console.log(`Delete user: ${ user.email }`);
    setUsers((existing) => {
      return existing.filter(u => u.email !== user.email);
    });
  }

  let profiles = users.map((user,index) => {
    return <Profile key={ user.email }
                    name={ user.name } title={ user.title } email={ user.email }
                    avatar={ user.avatar }
                    followers={ user.followers } 
                    onDelete= { handleDelete }/>
  });
  return(
    <div className="col-md-12 col-xl-4">
      { profiles }
    </div>
  );
}