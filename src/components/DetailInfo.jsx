import React from "react";
import Loading from "../components/Loading";
import { Col, Row, Rate } from "antd";

import { IMG_URL } from "../common/common";
import styled from "styled-components";

function DetailInfo({ movieDetailInfo }) {
  if (!movieDetailInfo) {
    return <Loading />;
  }

  return (
    <div>
      <Row>
        <Col span={8}>
          <ImgStyled alt='viewListimg' src={IMG_URL + movieDetailInfo.poster_path} />
        </Col>
        <Col span={16}>
          <DescWrapStyled>
            <Rate className='padding' disabled defaultValue={movieDetailInfo.vote_average / 2} />

            <div className='padding'>
              장르 : {movieDetailInfo.genres.map((el) => el.name).reduce((acc, curr) => acc + ", " + curr)}
            </div>
            <div className='padding'>시간 : {movieDetailInfo.runtime}분</div>
            <div className='padding'>{movieDetailInfo.tagline}</div>
            <div className='padding'>{movieDetailInfo.overview}</div>
          </DescWrapStyled>
        </Col>
      </Row>
    </div>
  );
}

const ImgStyled = styled.img`
  width: 100%;
`;

const DescWrapStyled = styled.div`
  padding: 10px;
  .padding {
    padding-bottom: 10px;
  }
`;

export default DetailInfo;
