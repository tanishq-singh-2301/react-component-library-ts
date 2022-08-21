interface props {
  name: string;
  onClick: () => void;
}

const Button = ({ name, onClick }: props): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="text-red-700 hover:text-blue-800 font-bold"
    >
      {name}
    </button>
  );
}

export default Button;