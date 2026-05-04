// 1. Enum
enum Colors {
  Red = "red",
  Green = "green",
  Blue = "blue"
}

// 2. Змінні
let nameUser: string;
let ageUser: number;

// 3. Функція
function greet(name: string, age: number): string {
  return `Привіт, ${name}! Тобі ${age} років.`;
}

// 4. Кнопка
const btn = document.getElementById("btn") as HTMLButtonElement;

btn.addEventListener("click", () => {

  const nameInput = document.getElementById("name") as HTMLInputElement;
  const ageInput = document.getElementById("age") as HTMLInputElement;
  const select = document.getElementById("colorSelect") as HTMLSelectElement;
  const output = document.getElementById("output") as HTMLDivElement;

  nameUser = nameInput.value;
  ageUser = Number(ageInput.value);

  // Привітання
  const message = greet(nameUser, ageUser);

  // Перебір enum
  let list = "<ul>";
  for (const key in Colors) {
    list += `<li>${Colors[key as keyof typeof Colors]}</li>`;
  }
  list += "</ul>";

  // Вивід
  output.innerHTML = message + list;

  // Зміна кольору фону
  document.body.style.backgroundColor = select.value;
});