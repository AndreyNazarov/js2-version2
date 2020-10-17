const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingRef = document.querySelector("#ingredients");

const liRef = (element) => {
  element.map((el) => {
    let makeLiRef = document.createElement("li");
    makeLiRef.textContent = el;
  });
  ingRef.append(...element);
  console.log(ingRef);
};

liRef(ingredients);
