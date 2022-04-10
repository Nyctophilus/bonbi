/*
	helper functions
*/
const removeActives = (el) => {
  Array.from(el.children).forEach((e) =>
    e.classList.remove("active")
  );
};
const addActive = (el) => {
  el.classList.add("active");
};

const filtering = (catg) => {
  document.querySelectorAll(".work .box").forEach((img) => {
    img.style.display = `none`;

    if (catg === "all") img.style.display = `block`;

    if (catg === img.dataset.work)
      img.style.display = `block`;
  });
};

/*
	main functions
*/

const workFilter = (e) => {
  const catg = e.target.dataset.catg;

  if (catg) {
    removeActives(e.target.parentElement);
    addActive(e.target);

    filtering(catg);
  }
};

/*
  events
*/
document
  .querySelector(".work ul")
  .addEventListener("click", workFilter);
