const restaurants = {
  "Spice Villa": [
    { name: "Butter Chicken", price: 12, category: "Main" },
    { name: "Palak Paneer", price: 11, category: "Main" },
    { name: "Paneer Butter Masala", price: 12, category: "Main" },
    { name: "Biryani", price: 10, category: "Main" },
    { name: "Tandoori Roti", price: 2, category: "Side" },
    { name: "Garlic Naan", price: 3, category: "Side" },
    { name: "Gulab Jamun", price: 4, category: "Dessert" },
    { name: "Rasgulla", price: 4, category: "Dessert" },
    { name: "Mango Lassi", price: 5, category: "Drink" }
  ],
  "Sea Breeze": [
    { name: "Grilled Salmon", price: 15, category: "Main" },
    { name: "Seafood Chowder", price: 8, category: "Starter" },
    { name: "Fish Tacos", price: 12, category: "Main" },
    { name: "Shrimp Cocktail", price: 10, category: "Starter" },
    { name: "Lobster Roll", price: 18, category: "Main" },
    { name: "Cheesecake", price: 6, category: "Dessert" },
    { name: "Key Lime Pie", price: 7, category: "Dessert" },
    { name: "Iced Tea", price: 3, category: "Drink" }
  ],
  "Pizza Palace": [
    { name: "Margherita Pizza", price: 9, category: "Main" },
    { name: "Pepperoni Pizza", price: 11, category: "Main" },
    { name: "Veggie Supreme", price: 10, category: "Main" },
    { name: "Garlic Bread", price: 4, category: "Side" },
    { name: "Caesar Salad", price: 6, category: "Starter" },
    { name: "Tiramisu", price: 5, category: "Dessert" },
    { name: "Soft Drink", price: 2, category: "Drink" }
  ]
};

function render() {
  const container = document.getElementById('restaurants-container');
  Object.entries(restaurants).forEach(([name, items]) => {
    const section = document.createElement('div');
    section.className = 'restaurant';
    section.innerHTML = `<h2>${name}</h2>`;
    const btnContainer = document.createElement('div');
    btnContainer.className = 'filter-buttons';
    const cats = ["All", ...new Set(items.map(i => i.category))];
    cats.forEach(cat => {
      const btn = document.createElement('button');
      btn.innerText = cat;
      btn.onclick = () => showItems(items, section, cat);
      btnContainer.appendChild(btn);
    });
    section.appendChild(btnContainer);
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu-items';
    section.appendChild(menuDiv);
    showItems(items, section, "All");
    container.appendChild(section);
  });
}

function showItems(items, section, category) {
  const menuDiv = section.querySelector('.menu-items');
  menuDiv.innerHTML = '';
  items
    .filter(i => category === "All" || i.category === category)
    .forEach(i => {
      const div = document.createElement('div');
      div.className = 'menu-item';
      div.innerHTML = `<span class="name">${i.name}</span><span class="price">$${i.price}</span>`;
      menuDiv.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', render);
