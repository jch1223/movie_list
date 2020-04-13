import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import DetailInfo from "../components/DetailInfo";

function Detail({ title, setMovieID, movieDetailInfo }) {
  const { id } = useParams();

  useEffect(() => {
    setMovieID(id);
  }, [id, setMovieID]);

  return (
    <Layout title={title} movieTitle={movieDetailInfo && movieDetailInfo.title}>
      <DetailInfo movieDetailInfo={movieDetailInfo} />
    </Layout>
  );
}

export default Detail;
