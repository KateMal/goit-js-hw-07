const mainList = document.querySelector("ul#categories");
const allItems = mainList.querySelectorAll("li.item");

console.log(`Кількість елементів li.item: ${allItems.length}`);

allItems.forEach((currentCategoryItem) => {
  const categoryHeader = currentCategoryItem.querySelector("h2");
  const categoryTitleText = categoryHeader.textContent;

  const innerListItems = currentCategoryItem.querySelectorAll("li");
  const countOfItems = innerListItems.length;

  console.log(`Назва категорії: ${categoryTitleText}`);
  console.log(`Кількість елементів у категорії: ${countOfItems}`);
  console.log("---");
});
