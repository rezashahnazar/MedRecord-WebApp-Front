import { useStoreState } from "easy-peasy";
import { Navigate } from "react-router-dom";

const IsLogged = (props) => {
  const gLogged = useStoreState((state) => state.gLogged);

  return (
    <>{gLogged === false ? props.children : <Navigate to="/" replace />}</>
  );
};

export default IsLogged;
