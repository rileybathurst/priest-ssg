import React from 'react'

function Hook() {

  function sayHello() {
    // alert('Hello!');
    var menu_small = document.getElementById('menu_small');

    if (menu_small.className === 'active'){
      menu_small.className = 'inactive';
    } else {
      menu_small.className = 'active';
    }
  }
  
  return (
    <button onClick={sayHello}>
    Menu
  </button>
    

  );
}

export default Hook;