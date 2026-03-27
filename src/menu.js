export default function loadMenu() {
    const container = document.getElementById("container");
    container.innerHTML = "";

    const title = document.createElement("h1");
    title.classList.add("menu", "title");
    title.textContent = "Menu";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    menuContainer.innerHTML = `
        <div class="plato">
            <h3>PalaCasa Pizza</h3>
            <p>Sourdough crust, fresh tomato sauce, mozzarella, prosciutto, and fresh basil.</p>
            <p class="precio"><strong>14,00€</strong></p>
        </div>

        <div class="plato">
            <h3>Rustic Burger</h3>
            <p>Premium beef patty, melted cheddar cheese, caramelized onions, and a toasted brioche bun.</p>
            <p class="precio"><strong>12,50€</strong></p>
        </div>

        <div class="plato">
            <h3>Pesto Pasta</h3>
            <p>Al dente spaghetti with homemade pesto sauce, cherry tomatoes, and shaved parmesan cheese.</p>
            <p class="precio"><strong>11,00€</strong></p>
        </div>

        <div class="plato">
            <h3>Fresh Garden Salad</h3>
            <p>Mixed greens, sliced avocado, walnuts, goat cheese, and a sweet honey vinaigrette.</p>
            <p class="precio"><strong>9,50€</strong></p>
        </div>

        <div class="plato">
            <h3>Classic Tiramisu</h3>
            <p>Coffee-soaked sponge cake layers, smooth mascarpone cream, and dusted cocoa.</p>
            <p class="precio"><strong>6,00€</strong></p>
        </div>
    `;


    container.appendChild(title);
    container.appendChild(menuContainer);
};