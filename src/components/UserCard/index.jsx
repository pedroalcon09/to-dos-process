import { StyledUserCard } from "./style";
import profile from "../../imgs/profile.png";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function UserCard(currentUser) {
  const history = useHistory();
  const [user, setUser] = useState(currentUser);

  return (
    <StyledUserCard
      key={user.user.id}
      id={user.user.id}
      onClick={() => history.push(`/users/${user.user.id}`)}
    >
      <img src={profile} alt="PROFILE" />

      <h3>{user.user.name}</h3>
      <h4>{user.user.email}</h4>
    </StyledUserCard>
  );
}
