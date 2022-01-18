const form = document.querySelector("#searchForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  //query string object
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  console.log(res.data[0].show.image.medium);

  //paned allpool tehtud fcn tööle, sisestad api callist saadud array arguemndiks mille üle hakkab loopima
  displayMovies(res.data);
  form.elements.query.value = "";
});

const displayMovies = (shows) => {
  for (let result of shows) {
    //if selle jaoks et kui ühel filmil pole image-it siis ei viska errorisse.
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
