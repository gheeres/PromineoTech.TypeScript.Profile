type FollowButtonProps = {
  onFollow?: (e: React.MouseEvent) => void,
  followers?: number  
};

export default function FollowButton(props: FollowButtonProps) {
  const followers = props.followers ?? 0;

  return (
    <button type="button" onClick={ props.onFollow } className="btn btn-primary position-relative btn-rounded btn-lg">
      Follow Me 
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      { followers ?? 0 } <span className="visually-hidden">followers</span>
      </span>
    </button>
  );
}