axios
  .get("http://localhost:8080/api/foods")
  .then(function (response) {
    const wrapper = document.querySelector("#foodwrapper");
    response.data.forEach((food) => {
      const newElement = document.createElement("div");
      newElement.setAttribute("class", "card col-2");
      wrapper.appendChild(newElement);
      newElement.innerHTML = `
            <div class="card-body" id="food_${food.id}">
              <img class="card-img-top" src="${food.imgUrl}" alt="${
        food.name
      } image">
              <h5 class="card-title">${food.name}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                  € ${priceFormatter(food.price)}
              </h6>
              <p class="card-text">
                  ${food.description}
              </p>
            </div>`;
    });
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

function priceFormatter(toFormat) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(toFormat);
}
