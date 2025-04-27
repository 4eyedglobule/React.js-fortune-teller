
interface Props {
    children: string;
    colour: string;
}

const Alert = ({ children,colour }:Props) => {
  return (
    <div className={"alert alert-"+colour} role="alert">
       {children}
    </div>

  );
};

export default Alert;