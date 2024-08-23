const categoryFullItemEl = document.querySelectorAll(".item");
let numOfCategories = 0;
numOfCategories += categoryFullItemEl.length;
console.log("Number of categories:", numOfCategories);

categoryFullItemEl.forEach((item) => {
  const categoryTitleEl = item.querySelector(".item h2");
  console.log(`Category: ${categoryTitleEl.textContent}`);
  const categoryItemEl = item.querySelectorAll(".item li");
  console.log(`Elements: ${categoryItemEl.length}`);
});
