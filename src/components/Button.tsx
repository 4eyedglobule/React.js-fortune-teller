interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      type="button"
      style={{ fontFamily: "Raleway", fontSize: "30px" }}
      className={
        "btn d-flex btn-lg btn-outline-dark justify-content-center font-family-Raleway"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
