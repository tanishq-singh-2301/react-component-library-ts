interface props {
  name: string;
  onClick: () => void;
}

const Button = ({ name, onClick }: props): JSX.Element => {
  return (
    <button
      onClick={onClick}
    >{name}</button>
  );
}

export default Button;