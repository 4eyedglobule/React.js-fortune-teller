
interface Props {
    children: string;
    onClick: () => void;
}

const Button = ({ children, onClick }:Props) => {
  return (
    <button type="button" className={"btn text-nowrap btn-lg btn-outline-dark position-absolute top-50 start-50 translate-middle"} onClick={onClick}>
      { children }
    </button>
  );
};

export default Button;