import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Search = ({ searchResults }) => {
  if (searchResults.length === 0) {
    return (
    <div className='text-center vh-100 d-flex justify-content-center align-items-center'>
      <h1>Product not found</h1>
    </div>
    )
  }

  return (
    <Container className='my-5'>
      <Row>
        {searchResults.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3}>
            <Card className="mb-3">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Search;
