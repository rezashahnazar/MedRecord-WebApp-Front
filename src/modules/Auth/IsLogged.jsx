import { useStoreState } from "easy-peasy";
import { Navigate } from "react-router-dom";

const IsLogged = (props) => {
  const gLogged = useStoreState((state) => state.gLogged);

  return (
    <>{gLogged === true ? props.children : <Navigate to="/login" replace />}</>
  );
};

export default IsLogged;
