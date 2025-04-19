import { useState } from "react";
import Avatar from "./Avatar";
import FollowButton from "./FollowButton";
import SocialMediaButtons from "./SocialMediaButtons";
import { User } from "../types";

type ProfileProps = {
  name: string,
  title: string,
  email: string,
  avatar?: string,
  followers?: number,
  onDelete: (user: User) => void,
};

export default function Profile(props: ProfileProps) {
  const [ user, setUser ] = useState<User>({
   name: props.name,
   title: props.title,
   email: props.email,
   avatar: props.avatar,
   followers: props.followers ?? 0
  });

  function handleFollow(e: React.MouseEvent) {
    setUser((existingUser) => ( { ...existingUser, 
                                  followers: (existingUser?.followers ?? 0) + 1 
                                } ) );
  }
  function handleDelete(e: React.MouseEvent) {
    if (props.onDelete) {
      props.onDelete(user);
    }
  }

  return(
    <div className="card" style={ { borderRadius: "15px" } }>
      <div className="card-body text-center">
        <div className="mt-3 mb-4">
          <Avatar image={ user?.avatar }/>
        </div>
        <h4 className="mb-2">{ user?.name }</h4>
        <p className="text-muted mb-4">@{ user?.title } <span className="mx-2">|</span> <a href="#!">{ user?.email }</a></p>
        <div className="mb-4 pb-2">
          <SocialMediaButtons />
        </div>
        <FollowButton onFollow={ handleFollow } followers={ user.followers } />
      </div>
      <div className="position-absolute top-0 end-0 m-2">
        <i className="text-danger bi bi-trash-fill" onClick={ handleDelete }></i>
      </div>
    </div>
  ); 
}