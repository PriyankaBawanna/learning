import { useState, useEffect } from "react";
import "./styles.css";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api.js";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import AlbumPage from "./pages/AlbumPage/AlbumPage";

export default function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [feedbackFlag, setFeedbackFlag] = useState(false);
  const [songs, setSongs] = useState([]);
  const [currSong, setCurrSong] = useState(null);
  const generateData = async () => {
    try {
      let res = await fetchTopAlbums();
      setTopAlbums(res);
      res = await fetchNewAlbums();
      setNewAlbums(res);
      res = await fetchSongs();
      setSongs(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    generateData();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              topAlbums={topAlbums}
              newAlbums={newAlbums}
              songs={songs}
              currSong={currSong}
              setCurrSong={setCurrSong}
              feedbackFlag={feedbackFlag}
              setFeedbackFlag={setFeedbackFlag}
            />
          }
        />
        <Route
          path="/albums/:slug"
          element={
            <AlbumPage
              topAlbums={topAlbums}
              newAlbums={newAlbums}
              currSong={currSong}
              setCurrSong={setCurrSong}
              feedbackFlag={feedbackFlag}
              setFeedbackFlag={setFeedbackFlag}
            />
          }
        />
      </Routes>
    </div>
  );
}
