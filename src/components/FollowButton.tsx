import { useState } from "react";

type FollowButtonProps = {
  followers?: number  
};

export default function FollowButton(props: FollowButtonProps) {
  const [ followers, setFollowers ] = useState(props?.followers ?? 0); 

  function handleClick(e : React.MouseEvent<HTMLButtonElement>) {
    if (followers) {
      setFollowers(followers + 1);
    }
    console.log(followers);
  }

  return (
    <button type="button" onClick={ handleClick } className="btn btn-primary position-relative btn-rounded btn-lg">
      Follow Me 
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      { followers ?? 0 } <span className="visually-hidden">followers</span>
      </span>
    </button>
  );
}