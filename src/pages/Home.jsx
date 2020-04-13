import React from "react";
import Layout from "../layout/Layout";
import MovieList from "../components/MovieList";

function Home({ title, viewList }) {
  return (
    <Layout title={title}>
      <MovieList viewList={viewList} />
    </Layout>
  );
}

export default Home;
