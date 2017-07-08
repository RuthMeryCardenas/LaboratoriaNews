const state = {
  mainNews : null
}

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Content());
  // wrapper.append(Header());
  root.append(wrapper);
}

$( _ => {
  console.log("cargando app");
  $.get('/api/categories/', function (response){
    state.mainNews = response;
    console.log(state.mainNews);
    const root = $('.root');
    render(root);
  });
});
const Content = () => {
  const content = $('<div class="content"></div>');
  const mainNews = $('<div class="row content__mainNews"></div>');
  const col = $('<div class="column-xs-12"></div>');
  const newsMain = $('<div class="news-main"></div>');
  const image = $('<div class="news-main__image"></div>');

  const secondaryNews = $('<div class="row secondaryNews"></div>');


  image.append('<img src="assets/img/news/news-0.png" alt="">');
  newsMain.append(image);
  col.append(newsMain);
  mainNews.append(col);

  content.append(mainNews);
  content.append(secondaryNews);

  return content;
}
