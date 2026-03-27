export default function loadHome(){
    const container = document.getElementById("container");
    container.innerHTML = "";

    const title = document.createElement("h1");
    title.classList.add("home", "title");
    title.textContent = "Restaurante PalaCasa";
    
    const intro = document.createElement("div");
    intro.classList.add("home-intro")
    intro.innerHTML = `
        <h2>Welcome to PalaCasa</h2>
        <p id="intro-p">Where tradition meets flavor. We serve the finest homemade dishes, crafted daily with fresh, local ingredients and a lot of love. Whether you're craving a comforting classic or looking to explore new tastes, our table is always ready for you. Come for the food, stay for the memories!</p>
    `;

    const schedule = document.createElement("div");
    schedule.classList.add("schedule")
    schedule.innerHTML = `
        <h2>Opening hours</h2>
        <ul class="hours">
            <li>Monday: 6am - 6pm</li>
            <li>Tuesday: 6am - 6pm</li>
            <li>Wednesday: 6am - 6pm</li>
            <li>Thursday: 6am - 10pm</li>
            <li>Friday: 6am - 10pm</li>
            <li>Saturday: 8am - 10pm</li>
            <li>Sunday & Holidays: 8am - 8pm</li>
        </ul>
    `;

    const address = document.createElement("div");
    address.classList.add("address")
    address.innerHTML = `
        <h2>Location</h2>
        <p>Avenue Nowhere 25, Faketown, Noland</p>
    `

    container.appendChild(title);
    container.appendChild(intro);
    container.appendChild(schedule);
    container.appendChild(address);
}