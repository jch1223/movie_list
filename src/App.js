import React, { useState, useEffect } from "react";
import { Route, Switch, useParams } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

import axios from "axios";
import { API_KEY } from "./common/common";

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
  const [viewCount, setViewCount] = useState(1);
  const [movieID, setMovieID] = useState(null);
  const [movieDetailInfo, setMovieDetailInfo] = useState(null);

  // 장르 리스트 가져오기
  useEffect(() => {
    if (genreList === null) {
      axios
        .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=ko`)
        .then((res) => {
          setGenreList(res.data.genres);
          console.log("장르list", genreList);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    console.log("장르list", genreList);
  }, [genreList]);

  // 영화 리스트 가져오기
  useEffect(() => {
    if (movieList === null) {
      axios
        .get(`https://api.themoviedb.org/3/list/${28}?api_key=${API_KEY}&language=ko`)
        .then((res) => {
          setMovieList(res.data.items);
          console.log("무비리스트", movieList);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    console.log("무비리스트", movieList);
  }, [movieList]);

  // 영화 디테일 정보 가져오기

  useEffect(() => {
    if (movieID !== null) {
      axios
        .get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=ko`)
        .then((res) => {
          setMovieDetailInfo(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [movieID]);

  // 브라우저에 나타나는 영화 리스트
  useEffect(() => {
    setViewList(movieList.slice(0, viewCount * 8));
  }, [movieList, viewCount]);

  // 인피니티 스크롤
  useEffect(() => {
    const MAX_COUNT = Math.ceil(movieList.length / 8);

    const onScroll = () => {
      if (
        document.documentElement.scrollTop + document.documentElement.clientHeight ===
        document.documentElement.scrollHeight
      ) {
        if (viewCount < MAX_COUNT) {
          setViewCount((prevPage) => prevPage + 1);
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    // console.log(viewCount);
    return () => window.removeEventListener("scroll", onScroll);
  }, [viewCount, movieList]);

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home title='home' viewList={viewList} />
        </Route>

        <Route path='/detail/:id'>
          <Detail title='detail' setMovieID={setMovieID} movieDetailInfo={movieDetailInfo} />
        </Route>

        <Route render={() => <div>404 not found</div>}></Route>
      </Switch>
    </>
  );
}

export default App;
