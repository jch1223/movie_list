import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

import axios from "axios";
import { API_KEY } from "./common/api_key";

import mockup from "./mockup.json";

function App() {
  const [genreList, setGenreList] = useState([
    { id: 28, name: "액션" },
    { id: 12, name: "모험" },
    { id: 16, name: "애니메이션" },
    { id: 35, name: "코미디" },
    { id: 80, name: "범죄" },
    { id: 99, name: "다큐멘터리" },
    { id: 18, name: "드라마" },
    { id: 10751, name: "가족" },
    { id: 14, name: "판타지" },
    { id: 36, name: "역사" },
    { id: 27, name: "공포" },
    { id: 10402, name: "음악" },
    { id: 9648, name: "미스터리" },
    { id: 10749, name: "로맨스" },
    { id: 878, name: "SF" },
    { id: 10770, name: "TV 영화" },
    { id: 53, name: "스릴러" },
    { id: 10752, name: "전쟁" },
    { id: 37, name: "서부" },
  ]);
  const [movieList, setMovieList] = useState(mockup);
  const [viewList, setViewList] = useState(null);
  const [viewCount, setViewCount] = useState(10);

  useEffect(() => {
    if (genreList === null) {
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=ko`).then((res) => {
        setGenreList(res.data.genres);
        console.log("장르list", genreList);
      });
    }
    console.log("장르list", genreList);
  }, [genreList]);

  useEffect(() => {
    if (movieList === null) {
      axios.get(`https://api.themoviedb.org/3/list/${28}?api_key=${API_KEY}&language=ko`).then((res) => {
        setMovieList(res.data.items);
        console.log("무비리스트", movieList);
      });
    }
    console.log("무비리스트", movieList);
  }, [movieList]);

  useEffect(() => {
    setViewList(movieList.slice(0, viewCount));
  }, [movieList, viewCount]);

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home title='home' viewList={viewList} />
        </Route>

        <Route path='/detail'>
          <Detail title='detail' />
        </Route>

        <Route render={() => <div>404 not found</div>}></Route>
      </Switch>
    </>
  );
}

export default App;
