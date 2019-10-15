const fetch = require('node-fetch');

const url = 'https://gustorestaurants.uk.com/restaurants/alderley-edge/menus/food/';

const allergenSearch = (searchTerm) => {
  return (
    fetch(`${url}${searchTerm}`)
      .then(res => res.text()));
};

allergenSearch('data-menu-filter-vegan')
  .then(body => {
    console.log(body);
  });
