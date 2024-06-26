async function ambilNama(category) {
    try {
        const response = await fetch("./json/pizzaName.json");
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        const selectBox = document.getElementById("pizzaSelect");
        selectBox.innerHTML = '';
        
        const pizzasFilteredByCategory = data.pizzas.filter(pizza => category === 'All' || pizza.Category === category);

        pizzasFilteredByCategory.forEach((pizza) => {
            const option = document.createElement("option");
            option.textContent = pizza.Pizza_Name;
            selectBox.appendChild(option);
        });
    } catch (error) {
        console.error("Error fetching the JSON:", error);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    ambilNama("All");

    document.getElementById('category').addEventListener('change', function () {
        const selectedCategory = this.value;
        ambilNama(selectedCategory);
    });
});
