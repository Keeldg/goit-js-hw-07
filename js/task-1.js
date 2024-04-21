const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

function getCategoryInfo() {
  let result = `Number of categories: ${categoriesItems.length}\n`;

  categoriesItems.forEach((item) => {
    const categoryTitle = item.querySelector("h2").textContent;
    const categoryItems = item.querySelectorAll("ul li").length;

    result += `Category: ${categoryTitle}\n`;
    result += `Elements: ${categoryItems}\n`;
  });

  return result;
}

console.log(getCategoryInfo());
