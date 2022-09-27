import React from 'react';

// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return <li className="item">{name} ✔</li>;
//   } else {
//      return <li className="item">{name}X</li>;
//   }
// }

// using &&
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}

export default function PackingList() {
  return (
   <div className="container">
     <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
         <Item 
          isPacked={true} 
          name="Guitar" 
        />
         <Item 
          isPacked={true} 
          name="Snacks" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
   </div>
  );
}
