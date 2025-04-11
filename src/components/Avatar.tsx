type AvatarProps = {
  image?: string
};

export default function Avatar(props: AvatarProps) {
  const { image } = props;
  return(
    <img src={ image } className="rounded-circle img-fluid" style={ { width: "100px" } } />
  );
}