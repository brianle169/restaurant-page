const menuItem = function (name, description) {
  const item = document.createElement("div");
  item.classList.add("menu-item");

  const itemName = document.createElement("p");
  itemName.textContent = name;
  itemName.classList.add("name");

  const itemDescription = document.createElement("p");
  itemDescription.textContent = description;
  itemDescription.classList.add("detail");

  item.appendChild(itemName);
  item.appendChild(itemDescription);

  return item;
};

const separator = function (str) {
  const sep = document.createElement("span");
  sep.textContent = str;
  sep.classList.add("separator");
  return sep;
};

export function MenuPage() {
  // Create the div container for about page
  const menuPage = document.createElement("div");
  menuPage.classList.add("menu");
  menuPage.id = "content";

  // 1. Title h1
  const title = document.createElement("h1");
  title.textContent = "Prestige Menu";

  // 2. Menu Items
  let item1 = menuItem("Pissaladière", "Allium, mushrom dashi, anchovy");
  let item2 = menuItem(
    "Isle of Skye Scallop",
    "Coastal herbs, lemon, olive oil sabayon"
  );
  let item3 = menuItem("Rack of Dover Sole", "Kohlrabi, yuzu, vadouvan");
  let item4 = menuItem("Aynhoe Park Deer", "Beetroot, verjus, shiso");
  let item5 = menuItem(
    "Selection of British and French Cheeses",
    "(£25 supplement)"
  );
  let item6 = menuItem("Sorbet", "Calvados, apple");
  let item7 = menuItem("Truffle ice cream", "Bodega, almond (supplement £15)");
  let item8 = menuItem("Plaisir Sucré", "Chocolate chémeux, hazelnut, milk");

  // 3. Price
  const price = document.createElement("p");
  price.textContent = "£150 per person";

  // 4. Extras' prices
  const extras = document.createElement("p");
  extras.classList.add("extras");
  extras.innerHTML =
    "Non-alcoholic pairing £70 <br> Matching wines £150 <br> Premium matching wines £190 <br> The Connoisseur matching wines £395";

  menuPage.appendChild(title);
  menuPage.appendChild(item1);
  menuPage.appendChild(separator("~"));
  menuPage.appendChild(item2);
  menuPage.appendChild(separator("~"));
  menuPage.appendChild(item3);
  menuPage.appendChild(separator("~"));
  menuPage.appendChild(item4);
  menuPage.appendChild(separator("~"));
  menuPage.appendChild(item5);
  menuPage.appendChild(separator("~"));
  menuPage.appendChild(item6);
  menuPage.appendChild(separator("or"));
  menuPage.appendChild(item7);
  menuPage.appendChild(separator("~"));
  menuPage.appendChild(item8);
  menuPage.appendChild(separator(""));
  menuPage.appendChild(price);
  menuPage.appendChild(separator(""));
  menuPage.appendChild(extras);

  return menuPage;
}
