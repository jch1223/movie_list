import React from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

import { IMG_URL } from "../common/common";
import styled from "styled-components";

function MovieList({ viewList }) {
  const { Meta } = Card;

  return (
    <Row>
      {viewList &&
        viewList.map((item) => {
          return (
            <Col lg={6} xs={12} key={item.id}>
              <Link to={`/detail?id=${item.id}`}>
                <CardStyled
                  hoverable
                  bordered={false}
                  cover={<img alt='viewListimg' src={IMG_URL + item.poster_path} />}
                >
                  <Meta title={item.title} description={item.overview} />
                </CardStyled>
              </Link>
            </Col>
          );
        })}
    </Row>
  );
}

const CardStyled = styled(Card)`
  width: 90%;
  margin: auto;

  .ant-card-body {
    padding: 20px 5px;
    padding-bottom: 20px;
  }
  .ant-card-meta-description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`;

export default MovieList;
