$( _ => {
  const state = {
    categories: null
  }

  $.get('/api/categories/', function (response){
    state.categories = response;
    console.log(state.categories);
  });

});
