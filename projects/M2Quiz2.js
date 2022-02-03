function noInput() {
    alert("Error No Input");
}

function calculate() {
    let age = document.getElementById("age");
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    let mf = document.getElementById("mf")
    let activity = document.getElementById("list");
    let calories = document.getElementById("total-calories");

    age = parseFloat(age.value);
    if (isNaN(age)) return noInput();

    height = parseFloat(height.value);
    if (isNaN(height)) return noInput();

    weight = parseFloat(weight.value);
    if (isNaN(weight)) return noInput();

    activity = activity.value;

    let sex = mf.elements.sex.value;

    calories.value = formula(weight, height, age, sex, activity);

    calculate_reduct()
}

function formula(weight, height, age, sex, activity) {
    let activity_mult;
    switch (activity) {
        case "s": activity_mult = 1.2; break;
        case "l": activity_mult = 1.375; break; 
        case "m": activity_mult = 1.55; break; 
        case "h": activity_mult = 1.725; break; 
    }
    let weights;
    if (sex == 'm') {
        weights = {
            bias: 66.5,
            weight: 13.75,
            height: 5.003,
            age: 6.755
        };
    } else {
        weights = {
            bias: 65.5,
            weight: 9.563,
            height: 1.850,
            age: 4.676
        };
    }
    let temp = weights.bias
             + weights.weight * weight
             + weights.height * height
             - weights.age * age;
    return activity_mult * temp;
}

let food_list = [];

function add_row() {
    let food = document.getElementById("food").value;
    let calories = Number(document.getElementById("food-calories").value);
    if (food == "") return alert("Please Input Food");
    if (isNaN(calories)) return alert("Enter the calorie count");
    let el = document.createElement("div");
    el.innerHTML = food + ": " + calories + " cal.";
    let list_el = document.getElementById("food-list");
    list_el.append(el);
    food_list.push({ food, calories, el });
    calculate_reduct()
}

function clear_list() {
    let list_el = document.getElementById("food-list");
    list_el.innerHTML = "";
    food_list.length = 0;
    calculate_reduct()
}

function calculate_reduct() {
    let reduced_cal = document.getElementById("reduced-calories");
    let sum = food_list.reduce((a,e) => a+e.calories, 0);
    let calories = document.getElementById("total-calories").value;
    if (isNaN(calories)) { return; }
    reduced_cal.value = calories - sum;
}