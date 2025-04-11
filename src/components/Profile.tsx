import Avatar from "./Avatar";
import FollowButton from "./FollowButton";
import SocialMediaButtons from "./SocialMediaButtons";

type ProfileProps = {
  name: string,
  title: string,
  email: string,
  avatar?: string,
  followers?: number
};

export default function Profile(props: ProfileProps) {
  const { name, title, email, avatar, followers } = props;

  return(
    <div className="card" style={ { borderRadius: "15px" } }>
      <div className="card-body text-center">
        <div className="mt-3 mb-4">
          <Avatar image={ avatar }/>
        </div>
        <h4 className="mb-2">{ name }</h4>
        <p className="text-muted mb-4">@{ title } <span className="mx-2">|</span> <a href="#!">{ email }</a></p>
        <div className="mb-4 pb-2">
          <SocialMediaButtons />
        </div>
        <FollowButton followers={ followers } />
      </div>
    </div>
  ); 
}