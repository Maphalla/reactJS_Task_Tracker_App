import Button from "./Button";
import { useLocation } from "react-router-dom";
const Heading = ({title , onShow ,showForm }) => {
  const location = useLocation()
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname ==='/' ? <Button color={showForm ?'red':'green'} text={ showForm ? 'Close Form' : 'Show Form'} onClick={onShow}/>:''}
    </header>
  );
}

export default Heading;
