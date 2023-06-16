import "./styles/Card.css";
import icon from "./assets/icon.jpg";

const Card = (game) => {
  let imageUrl = null;
  if (game.cover) {
    imageUrl =
      "https://images.igdb.com/igdb/image/upload/t_cover_big/" +
      game.cover +
      ".jpg";
  }

  const convert = (release_date) => {
    if (release_date == null) {
      return "No information";
    }

    const date = new Date(release_date * 1000);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${day.toString().padStart(2, "0")}-${month
      .toString()
      .padStart(2, "0")}-${year.toString()}`;

    return formattedDate;
  };

  return (
    <div className="card-container">
      <div className="product-img" data-genre="action">
        <img src={imageUrl ? imageUrl : icon} alt="Product 1" />
      </div>
      <div className="product-info">
        <h3>{game.name}</h3>
        <p>{convert(game.first_release_date)}</p>
      </div>
    </div>
  );
};

export default Card;
