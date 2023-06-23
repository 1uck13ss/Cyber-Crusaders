import "./styles/Platform.css";
import Toggle from "./Toggle";

const Platform = ({ filterByPlatform }) => {
  const platforms = ["Nintendo", "Playstation", "XBox", "PC"];
  return (
    <div className="platform-list">
      <ul>
        {platforms.map((platform) => (
          <li key={platform}>
            <Toggle name={platform} condition={filterByPlatform} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Platform;
