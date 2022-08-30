import { createContext, useState } from "react";

// membuat context, context adalah state management dari react library
const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

// ini akan menjadi regular react component
// bertugas meyediakan cotext ke seluruh component
// dan bertanggung jawab mengubah nilai context

function FavoriteContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    // untuk mendapatkan state terakhir, gunakan function
    // didalamnyaa, Before
    // setUserFavorites(userFavorites.concat(favoriteMeetup))
    //after
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
        return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    })
  }
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}
