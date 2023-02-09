//import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//import { useAppDispatch } from "./app/hooks";
import TopNav from "./components/top-nav/TopNav";
import About from "./routes/about/About";
import { IconContext } from "react-icons/lib";
import Games from "./routes/games/Games";
//import { fetchGames } from "./features/games/gameSlice";
import Contact from "./routes/contact/Contact";
import BuyingBasket from "./routes/buying-basket/BuyingBasket";
import AllGames from "./components/all-games/AllGames";
import NintendoGames from "./components/nintendo-games/NintendoGames";
import XboxGames from "./components/xbox-games/XboxGames";
import PS4And5Games from "./components/ps-games/PS4And5Games";
import NintendoGameDetails from "./routes/game-details/NintendoGameDetails";
import XboxGameDetails from "./routes/game-details/XboxGameDetails";
import PsGameDetails from "./routes/game-details/PsGameDetails";

function App() {
  /* const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]); */
  return (
    <>
      <TopNav />
      <IconContext.Provider value={{ color: "red", size: "100px" }}>
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/games" element={<Games />}>
            <Route path="all" element={<AllGames />} />
            <Route path="nintendo" element={<NintendoGames />} />
            <Route path="xbox" element={<XboxGames />} />
            <Route path="ps" element={<PS4And5Games />} />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buying-basket" element={<BuyingBasket />} />
          {/* master detail: */}
          <Route path="/games/:id" element={<NintendoGameDetails />} />
          {/* <Route path="/games/:id" element={<XboxGameDetails />} />
          <Route path="/games/:id" element={<PsGameDetails />} /> */}
        </Routes>
      </IconContext.Provider>
    </>
  );
}

export default App;

