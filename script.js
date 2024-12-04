const container1 = document.getElementById("container1")
const container2 = document.getElementById("container2")

container1.style.backgroundColor = "red"
container2.style.backgroundColor = "blue"

const href = document.querySelector("a").setAttribute("href", "https://www.google.com")

const listItems = document.querySelectorAll(".list");
listItems.forEach((item, index) => {
    item.textContent = `list baru ${index + 1}`;
    item.style.fontSize = "20px";
    item.style.fontStyle = "italic";
    item.style.backgroundColor = index % 2 === 0 ? "lightyellow" : "lightpink";
});
