import "./styles/Genre.css";

const Genre = ({ filterByGenres }) => {
  return (
    <div className="genre-list">
      <ul>
        <strong className="genre">Genre</strong>
        <li onClick={() => filterByGenres("Action")}>Action</li>
        <li onClick={() => filterByGenres("Adventure")}>Adventure</li>
        <li onClick={() => filterByGenres("Fighting")}>Fighting</li>
        <li onClick={() => filterByGenres("MOBA")}>MOBA</li>
        <li onClick={() => filterByGenres("Fighting")}>Fighting</li>
        <li onClick={() => filterByGenres("Platform")}>Platform</li>
        <li onClick={() => filterByGenres("RPG")}>RPG</li>
        <li onClick={() => filterByGenres("Sports")}>Sports</li>
        <li onClick={() => filterByGenres("Shooter")}>Shooter</li>
        <li onClick={() => filterByGenres("Racing")}>Racing</li>
      </ul>
    </div>
  );
};

export default Genre;
