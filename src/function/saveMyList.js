export const saveMyList = (event) => {
  const jsonData = event.target.getAttribute("data");
  const data = JSON.parse(jsonData);
  let saveMovieList = localStorage.getItem("myList")
    ? JSON.parse(localStorage.getItem("myList"))
    : [];

  if (saveMovieList.length > 0) {
    const found = saveMovieList.find((item) => item.id === data.id);
    if (!found) {
      saveMovieList.push(data);
    }
  } else {
    saveMovieList.push(data);
  }
  localStorage.setItem("myList", JSON.stringify(saveMovieList));
};
