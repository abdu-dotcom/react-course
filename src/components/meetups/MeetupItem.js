import { useContext } from "react";
import style from "./MeetupItem.module.css";
import Card from "../ui/Card.js";
import FavoriteContext from "../../store/favorites-contex";

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoriteContext);
    const itemIsFavorite = favoriteCtx.itemFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={style.item}>
      <Card>
        <div className={style.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={style.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={style.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? "Remove from Favorites" : "To Favorites"}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
