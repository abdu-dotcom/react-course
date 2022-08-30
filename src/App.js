// import Todo from "./components/Todo"; // TIdak digunakan
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  // path menuju url aftar domain
  //
  return (
    <BrowserRouter>
    <MainNavigation/>
    <Routes>
        <Route path="/" element={<AllMeetupsPage/>}/>
        <Route path="/new-meetup" element={<NewMeetupPage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
