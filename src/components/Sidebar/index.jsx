import "./styles.css";
import FallbackAvatars from "../ProfileAvatar/index";
import PlanetButton from "../Button";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="profile-info">
          <FallbackAvatars />
          <PlanetButton />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
