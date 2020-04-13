import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import MovieList from "../components/MovieList";

function Home({ title, viewList, setMovieDetailInfo }) {
  useEffect(() => {
    setMovieDetailInfo(null);
  }, [setMovieDetailInfo]);

  return (
    <Layout title={title}>
      <MovieList viewList={viewList} />
    </Layout>
  );
}

export default Home;
