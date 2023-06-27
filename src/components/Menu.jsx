import React from 'react';

function Menu() {
  const openMenu = (event, menuId) => {
    // Implement your logic for opening the menu here
    console.log(`Opening ${menuId} menu`);
  };

  return (
    <div className="w3-container" id="menu">
      <div className="w3-content" style={{ maxWidth: '700px' }}>
        <h5 className="w3-center w3-padding-48">
          <span className="w3-tag w3-wide">THE MENU</span>
        </h5>

        <div className="w3-row w3-center w3-card w3-padding">
          <div className="w3-col s6 tablink">
            <a href="javascript:void(0)" onClick={(event) => openMenu(event, 'Eat')} id="myLink">
              Eat
            </a>
          </div>
          <div className="w3-col s6 tablink">
            <a href="javascript:void(0)" onClick={(event) => openMenu(event, 'Drinks')}>
              Drink
            </a>
          </div>
        </div>

        <div id="Eat" className="w3-container menu w3-padding-48 w3-card">
          <h5>Bread Basket</h5>
          <p className="w3-text-grey">Assortment of fresh baked fruit breads and muffins 5.50</p>
          <br />

          {/* Rest of the menu items */}
        </div>

        <div id="Drinks" className="w3-container menu w3-padding-48 w3-card">
          <h5>Coffee</h5>
          <p className="w3-text-grey">Regular coffee 2.50</p>
          <br />

          {/* Rest of the menu items */}
        </div>

        <img src="/w3images/coffeehouse2.jpg" style={{ width: '100%', maxWidth: '1000px', marginTop: '32px' }} alt="Coffeehouse" />
      </div>
    </div>  
  );
}

export default Menu;
