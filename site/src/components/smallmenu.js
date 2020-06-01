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
    <>
      {/* <div className="small_menu--icon">=</div> fall back */}
      <div className="small_menu--icon">
        <span className="small_menu--icon-topline"></span>
        <span className="small_menu--icon-bottomline"></span>
      </div>
      <button className="small_menu--opener" onClick={openUp}>
          Menu
      </button>
    </>
  );
}

export default SmallMenu;