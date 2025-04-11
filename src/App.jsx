import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/SideBar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter basename="/youtube-clone">
          <Header />
          <Routes>
            <Route
              path="/search/:searchTerm"
              element={
                <>
                  <div className="app__page">
                    <SideBar />
                    <SearchPage />
                  </div>
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  {/* <Header /> */}
                  <div className="app__page">
                    <SideBar />
                    <RecommendedVideos />
                  </div>
                </>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
