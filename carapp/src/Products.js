import React from 'react'
import cars from './Cars';

function Products() {
  return (
    <ul>
     {cars.map(car => <li key={car.carname}>{car.carname}</li>)}
    </ul>
  );
}

export default Products;