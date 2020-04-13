import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";

function Detail({ title, setMovieID }) {
  const { id } = useParams();

  useEffect(() => {
    setMovieID(id);
  }, [id, setMovieID]);

  return <Layout title={title}>상세페이지</Layout>;
}

export default Detail;
