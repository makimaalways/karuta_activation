const beginButton = document.getElementById("beginButton");
const priceChartButton = document.getElementById("priceChartButton");
const homeButton = document.getElementById("homeButton");
const content = document.getElementById("content");

const discordButton = document.createElement("button");
discordButton.textContent = "Discord Account";
discordButton.id = "discordButton";
discordButton.classList.add("hidden");
document.body.appendChild(discordButton);

const image1 = "Image/DiscordAccount.png"; 
const image2 = "Image/PriceChart.png"; 

beginButton.addEventListener("click", () => {
    content.innerHTML = `<img src="${image1}" alt="Karuta account activation on Discord">`;
    toggleVisibility(false); 
});

priceChartButton.addEventListener("click", () => {
    content.innerHTML = `<img src="${image2}" alt="Karuta account activation on Discord">`;
    toggleVisibility(true); 
});

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    toggleVisibility(false); 
});

discordButton.addEventListener("click", () => {
    alert("Contact me on Discord👉 makima_always");
});

function toggleVisibility(showDiscord) {
    beginButton.classList.toggle("hidden");
    priceChartButton.classList.toggle("hidden");
    homeButton.classList.toggle("hidden");
    discordButton.classList.toggle("hidden", !showDiscord); 
}
