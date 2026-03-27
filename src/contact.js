export default function loadContact() {
    const container = document.getElementById("container");
    container.innerHTML = "";

    const title = document.createElement("h1");
    title.classList.add("contact", "title");
    title.textContent = "Contact Us"

    const contacts = document.createElement("div");
    contacts.classList.add("contacts-container");
    contacts.innerHTML = `
        <div class="contact-card">
            <h3>Chef Mario Rossi</h3>
            <p><strong>Position:</strong> Head Chef</p>
            <p><strong>Phone:</strong> 555-0123-456</p>
            <p><strong>Email:</strong> deliciousPasta@notFake.com</p>
        </div>

        <div class="contact-card">
            <h3>Sarah Jenkins</h3>
            <p><strong>Position:</strong> Restaurant Manager</p>
            <p><strong>Phone:</strong> 555-0198-765</p>
            <p><strong>Email:</strong> totallyRealManager@notFake.com</p>
        </div>

        <div class="contact-card">
            <h3>Customer Support</h3>
            <p><strong>Position:</strong> Reservations & Events</p>
            <p><strong>Phone:</strong> 555-0100-200</p>
            <p><strong>Email:</strong> weActuallyAnswer@notFake.com</p>
        </div>
    `;

    container.appendChild(title);
    container.appendChild(contacts);

}