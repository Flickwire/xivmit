import { useParams } from "react-router";

export default () => {
  const { fightId } = useParams();
  return <>Fight {fightId}</>;
};
