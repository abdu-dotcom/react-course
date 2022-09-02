import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoriteContext from "../store/favorites-contex";

// berfungsi sebagai menampilkan halaman Favorites
function FavoritesPage() {
  const favoriteCtx = useContext(FavoriteContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>tidak ada content yang disukai</p>
  }else{
    content = <MeetupList meetups={favoriteCtx.favorites}/>;
  }
  return (
    <div>
      <h1>My Favorites</h1>
      {content}
    </div>
  );
}

export default FavoritesPage;
