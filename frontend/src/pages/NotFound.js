import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  navigate('/');
  return null;
};
export default NotFound;