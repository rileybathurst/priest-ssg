import React from 'react'

function SmallMenu() {

  function openUp() {
    var menu_small = document.getElementById('menu_small');

    if (menu_small.className === 'active'){
      menu_small.className = 'inactive';
    } else {
      menu_small.className = 'active';
    }
  }
  
  return (
    <button onClick={openUp}>
        Menu
    </button>
  );
}

export default SmallMenu;