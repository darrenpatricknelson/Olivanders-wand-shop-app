import React from 'react';
import '../App.css';
import Products from './Products';

// These will be passed a prop through the Shopping function to the product section.
// Practicing my prop passing
let products = {
  product1: {
    imageSrc: 'https://m.media-amazon.com/images/I/71pd2NqejsL._AC_SX425_.jpg',
    wandOwner: "Harry Potter's wand"
  },
  product2: {
    imageSrc: 'https://m.media-amazon.com/images/I/71PAkeYLFOL._AC_SX425_.jpg',
    wandOwner: "Hermione Granger's wand"
  },
  product3: {
    imageSrc: 'https://m.media-amazon.com/images/I/71oOFhB5zeL._AC_SX425_.jpg',
    wandOwner: "Ron Weasley's wand"
  }
};

function Shopping() {
  return (
    <>
      <Products products={products} />
    </>
  );
}

export default Shopping;

// This will display under the header when the user is signed in
// It will also dsiplay the products for sale

/* 
Resources:
The store is based off the fictional shop in the book and movie series Harry Potter
All information about this fictional store is taken from this webiste 
  - https://www.universalorlando.com/web/en/us/things-to-do/shopping/ollivanders-diagon-alley

Images taken from Amazon:
  - https://www.amazon.com/Wizarding-World-Authentic-Spellbinding-Collectible/dp/B08T22MS57/ref=sr_1_omk_3?crid=N6JOUW97H2YC&keywords=wands&qid=1648810460&sprefix=wa%2Caps%2C345&sr=8-3&th=1
*/
