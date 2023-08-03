import React, { useEffect, useState } from "react";
import { Card, CardTitle, Col, Row, Button } from "react-materialize";
import { fetchNews } from "../server";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [list, setList] = useState();

  useEffect(() => {
    fetchNews().then((response) => {
      setList(response.data);
    });
  }, []);

  // Filter the list to include only attractive news
  const attractiveNews = list?.filter((news) => news.bestseller === true);


  return (
    <div>
      {attractiveNews ? (
        <Row>
          {attractiveNews.map((news) => (
            <Col key={news.id} s={12} m={4} l={4}>
              <Card
                className="news-card"
                header={<CardTitle image={news.image} />}
              >
                <Button onClick={() => navigate("/details/" + news.id)}>
                  See details
                </Button>

              </Card>
              <h5>{news.name}</h5>
              <p>{news.description}</p>
              <p>price: {news.price}</p>
              <p>Category: {news.category}</p>
              <p>Rating : {news.rating}</p>
            </Col>
          ))}
        </Row>
      ) : (
        <div>Loading data</div>
      )}
    </div>
  );
};
