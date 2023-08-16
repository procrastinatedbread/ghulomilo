import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { AuthContext } from "../contexts/AuthContext";
import "./components.css";
export default function Suggestions() {
  const { state, handleFollow, suggestedUsers } = useContext(UserContext);
  const { user: loggedInUser } = useContext(AuthContext);

  return (
    <div className="suggestion-container">
      <h2>SUGGESTED USERS</h2>
      {suggestedUsers.map(({ _id, username, profilePic }) => (
        <div className="suggestion-list" key={_id}>
          <img className="profile-pic" src={profilePic} />
          <div className="suggested-user-details">
            <span>@{username}</span>
          </div>
          <button onClick={() => handleFollow(_id)}>Follow</button>
          <hr />
        </div>
      ))}
    </div>
  );
}
