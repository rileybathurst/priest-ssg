import React from 'react';

function Number() {
  // Declare a new state variable, which we'll call "count"
  let str = "";

  for (let i = 0; i < 9; i++) {

    str = str + i;
  }


  return (
    <>
      {str}
    </>
  );
}

export default Number;