import React, { useState } from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Products(props) {
  const products = props.products;

  const itemCards = Object.values(products).map((product, key) => (
    <Card style={{ width: '18rem' }} key={key}>
      <Card.Img variant="top" src={product.imageSrc} />
      <Card.Body>
        <Card.Title>{product.wandOwner}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  ));

  return (
    <div className="shoppingPage">
      <h3>Some of our finest wands from our finest wizards and witches</h3>
      <div className="cards">{itemCards}</div>
    </div>
  );
}

export default Products;

// These products will be created using the object we created on the app page.
// That object will be passed as a prop and then we will use that prop(object) to create the products using boostrap cards
// The links and text on the cards is all filler information and is not functional
