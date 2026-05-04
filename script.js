// 1. Enum
var Colors;
(function (Colors) {
    Colors["Red"] = "red";
    Colors["Green"] = "green";
    Colors["Blue"] = "blue";
})(Colors || (Colors = {}));
// 2. Змінні
let nameUser;
let ageUser;
// 3. Функція
function greet(name, age) {
    return `Привіт, ${name}! Тобі ${age} років.`;
}
// 4. Кнопка
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const select = document.getElementById("colorSelect");
    const output = document.getElementById("output");
    nameUser = nameInput.value;
    ageUser = Number(ageInput.value);
    // Привітання
    const message = greet(nameUser, ageUser);
    // Перебір enum
    let list = "<ul>";
    for (const key in Colors) {
        list += `<li>${Colors[key]}</li>`;
    }
    list += "</ul>";
    // Вивід
    output.innerHTML = message + list;
    // Зміна кольору фону
    document.body.style.backgroundColor = select.value;
});

//# sourceMappingURL=script.js.map