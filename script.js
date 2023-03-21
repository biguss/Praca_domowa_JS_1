console.log("1. ZMIENNE I TYPY");

console.log("\nZADANIE A");
const isHappy = true;
console.log(isHappy);
console.log(typeof isHappy);

const age = 27;
console.log(age);
console.log(typeof age);

const sayHello = "Hello, world!";
console.log(sayHello);
console.log(typeof sayHello);

console.log("\nZADANIE B");
console.log(2 + "2");
console.log(
  "Typ wyniku to string. W tym przypadku JavaScript próbuje zastosować mechanizm który polega na konwersji typu wartości w celu wykonania działania. W tym przypadku JavaScript widząc operację łączenia stringa ze zmienną typu number, konwertuje liczbę na string i łączy oba stringi w jeden."
);
console.log(2 + 2);
console.log(
  "Typ wyniku to number. W tym przypadku obie zmienne są typu number, więc JavaScript wykonuje dodawanie."
);

console.log(2 * "2");
console.log(
  'Typ wyniku to number. W tym przypadku JavaScript próbuje przekonwertować string "2" na number i wykonuje mnożenie.'
);

console.log(2 * 2);
console.log(
  "Typ wyniku to number. W tym przypadku obie zmienne są typu number, więc JavaScript wykonuje mnożenie."
);

console.log(1 == true);
console.log(
  "Typ wyniku to boolean. W tym przypadku JavaScript konwertuje wartość true na 1, a następnie wykonuje porównanie."
);

console.log(0 == false);
console.log(
  "Typ wyniku to boolean. W tym przypadku JavaScript konwertuje wartość false na 0, a następnie wykonuje porównanie."
);

console.log(0 == null);
console.log(
  "Typ wyniku to boolean. W tym przypadku JavaScript porównuje wartość 0 z wartością null, która oznacza brak wartości. Te wartości są różne, więc wynik jest false."
);

console.log(null == undefined);
console.log(
  "Typ wyniku to boolean. W tym przypadku JavaScript porównuje dwie wartości specjalne, null i undefined, które są równe tylko dla operatora ==."
);
console.log(
  '=" to operator przypisania wartości do zmiennej lub właściwości obiektu.'
);
console.log(
  '"==" to operator porównania wartości, który porównuje wartości po konwersji typów, aby uzyskać wynik (np. "2" == 2)'
);
console.log(
  '"===" to operator porównania wartości, który porównuje wartości i typy bez konwersji typów. (np. "2" !== 2)'
);

console.log("\nZADANIE C");

console.log(
  "Typy proste to typy wartości, które przechowują wartość bezpośrednio w zmiennej. Przykłady to: string, number, boolean, null, undefined, symbol. \n PRZYKŁAD:"
);
let x = 5;
let y = x;
y = 10;
console.log(x);
console.log(y);
console.log(
  "Typy referencyjne to typy danych, które przechowują referencję do obiektu, a nie samej wartości. Przykłady to: object, array, function. \n PRZYKŁAD:"
);

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1);
console.log(arr2);

console.log("\nZADANIE D");
let val = 0;
console.log(!!val);

let num = "2137";
console.log(Number(num));

let str = 007;
console.log(String(str));

let und = undefined;
console.log(!!undefined);

console.log("\nZADANIE E");
let array = new Array();
array.push(1);
array.push(2);
array.push(3);
console.log(array);

console.log("\nZADANIE F");
let object = new Object();
object.name = "Pawel";
object.age = 19;
object.gender = "male";
console.log(object);

console.log("\nZADANIE G");
console.log(
  'Typ NaN to specjalna wartość w języku JavaScript, która oznacza "Not a Number" i pojawia się w wyniku operacji matematycznych, które nie mogą zostać wykonane lub mają niewłaściwe argumenty. Funkcja isNaN() pozwala sprawdzić, czy wartość jest NaN.'
);

console.log("\nZADANIE H");
console.log(
  "Typ Symbol to jeden z typów danych wprowadzonych w ES6, który reprezentuje unikalną wartość, która może być używana jako klucz w obiektach JavaScript. Każda wartość Symbol jest jedyną i niepowtarzalną wartością, co oznacza, że dwa symbole zawsze będą różne, nawet jeśli ich opis jest taki sam."
);
console.log("\n2. FUNKCJE & WARUNKI");

console.log("\nZADANIE A");
let sumOfThree = function (a, b, c) {
  return a + b + c;
};

console.log(sumOfThree(1, 2, 3));

console.log("\nZADANIE B");
let triangleArea = function (height, baseline) {
  return (height * baseline) / 2;
};

console.log(triangleArea(5, 4));

console.log("\nZADANIE C");
function yearsSince18thBirthday(age) {
  if (age < 18) {
    return "Nie minęło jeszcze 18 lat od Twoich narodzin.";
  } else {
    const yearsSince = age - 18;
    return `Minęło już ${yearsSince} lat od Twoich 18 urodzin.`;
  }
}

console.log(yearsSince18thBirthday(25));
console.log(yearsSince18thBirthday(16));

console.log("\nZADANIE D");
function arrayMessage(array) {
  const arrayLength = array.length;
  const thirdElement = array[2];
  return `Przekazana tablica ma ${arrayLength} elementów a elementem numer 3 jest ${thirdElement}.`;
}

const exampleArray = ["jabłko", "banan", "cytryna", "pomarańcza"];
console.log(arrayMessage(exampleArray));

console.log("\nZADANIE E");
function personInfo(person) {
  const { firstName, lastName, age, height } = person;
  return `Pan/i. ${firstName} ${lastName} ma ${age} lat oraz ${height} cm wzrostu.`;
}

const testPerson = {
  firstName: "Jan",
  lastName: "Kowalski",
  age: 20,
  height: 180,
};

console.log(personInfo(testPerson));

console.log("\nZADANIE F");
function modifyPersonInfo(person, key, value) {
  person[key] = value;
  return person;
}

console.log(modifyPersonInfo(testPerson, "age", 25));

console.log("\nZADANIE G");
function fizzBuzz(num) {
  if (typeof num !== "number") {
    console.log("Przyjmowany jest tylko typ number.");
  } else {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
    } else if (num % 3 === 0) {
      console.log("Fizz");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    }
  }
}
fizzBuzz(15);
fizzBuzz(9);
fizzBuzz(10);
fizzBuzz("test");

console.log("\nZADANIE H");
function checkIfEven(num) {
  const isEven = num % 2 === 0 ? true : false;
  return isEven ? `${num} jest parzyste` : `${num} jest nieparzyste`;
}
console.log(checkIfEven(2));
console.log(checkIfEven(3));

console.log("\nZADANIE I");
function randomFromOneToTen() {
  return Math.floor(Math.random() * 10) + 1;
}
console.log(randomFromOneToTen()); // wylosowana liczba od 1 do 10

console.log("\nZADANIE J");
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInRange(1, 10)); // wylosowana liczba z zakresu od 1 do 10
console.log(randomInRange(-5, 5)); // wylosowana liczba z zakresu od -5 do 5

console.log("\nZADANIE K");
function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}
console.log(calculateCircleArea(5));

console.log("\n3. FUNKCJE & PĘTLE");

console.log("\nZADANIE A");
for (i = 0; i <= 9; i++) {
  console.log(i);
}

console.log("\nZADANIE B");
for (i = 9; i >= 1; i--) {
  console.log(i);
}

console.log("\nZADANIE C");

for (i = 5; i <= 15; i++) {
  console.log(i);
}

console.log("\nZADANIE D");
for (i = 0; i >= -10; i--) {
  console.log(i);
}

console.log("\nZADANIE E");

for (i = 0; i <= 20; i += 2) {
  console.log(i);
}

console.log("\nZADANIE F");

for (i = 10; i >= -10; i -= 4) {
  console.log(i);
}

console.log("\nZADANIE G");

for (i = 1; i <= 100; i *= 2) {
  console.log(i);
}

console.log("\nZADANIE H");

for (i = 1; i <= 10; i++) {
  if (i % 2 == 0) console.log(i);
}

console.log("\nZADANIE I");
for (i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`Parzysta ${i}`);
  } else if (i % 2 !== 0) {
    console.log(`Nieparzysta ${i}`);
  }
}

console.log("\nZADANIE J");
function countUpTo(number) {
  for (let i = 1; i <= number; i++) {
    console.log(i);
  }
}

countUpTo(5);

console.log("\nZADANIE K");
function countUpToEvery(number) {
  for (let i = number; i <= 50; i += number) {
    console.log(i);
  }
}

countUpToEvery(3);

console.log("\nZADANIE L");
const arrNames = [
  "Ksawery",
  "Zenobiusz",
  "Klementyna",
  "Apolonia",
  "Jeremiasz",
  "Bernadetta",
];

function greetPeople(arrNames) {
  for (let i = 0; i < arrNames.length; i++) {
    console.log(`Cześć, ${arrNames[i]}!`);
  }
}

greetPeople(arrNames);

console.log("\nZADANIE Ł");
const arrObjects = [
  {
    brand: "Mustang",
    color: "niebieski",
  },
  {
    brand: "Tesla",
    color: "czarna",
  },
  {
    brand: "Polonez",
    color: "żółty",
  },
  {
    brand: "Toyota",
    color: "fioletowa",
  },
];

function displayCars(arrObjects) {
  arrObjects.forEach((car) => {
    console.log(`Przed Tobą stoi ${car.color} ${car.brand}.`);
  });
}

displayCars(arrObjects);

console.log("\nZADANIE M");
const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayEvenNumbers(arrNumbers) {
  const evenNumbers = arrNumbers.filter((num) => num % 2 === 0);
  evenNumbers.forEach((num) => {
    console.log(num);
  });
}

console.log("\nZADANIE N");
const arrTypes = [
  2,
  4,
  5,
  undefined,
  null,
  "val",
  NaN,
  7,
  10,
  333,
  "874",
  22,
  21,
  400,
  "400",
  "undefined",
];

function sortTypes(arrTypes) {
  const arrOther = [];
  const arrNumbers = [];
  const arrEven = [];

  for (let i = 0; i < arrTypes.length; i++) {
    const element = arrTypes[i];

    if (typeof element === "number") {
      arrNumbers.push(element);
      if (element % 2 === 0) {
        arrEven.push(element);
      }
    } else {
      arrOther.push(element);
    }
  }

  return {
    arrOther,
    arrNumbers,
    arrEven,
  };
}

const sortedTypes = sortTypes(arrTypes);
console.log(sortedTypes);

console.log("\n4. METODY");

console.log("\nZADANIE A");
const names = ["Seba", "Kari", "Mati", "Andżi"];

const greetings = names.map((name) => `Cześć, ${name}!`);
console.log(greetings);

console.log("\nZADANIE B");
const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = array10.filter((number) => number % 2 === 0);

console.log(evenNumbers);

console.log("\nZADANIE C");
const people = [
  {
    name: "Tomasz",
    lastname: "Kowalski",
    gender: "male",
  },
  {
    name: "Karol",
    lastname: "Nowak",
    gender: "male",
  },
  {
    name: "Joanna",
    lastname: "Kowalska",
    gender: "female",
  },
  {
    name: "Anna",
    lastname: "Nowak",
    gender: "female",
  },
];

const women = people.filter((person) => person.gender === "female");
console.log(women);

console.log("\nZADANIE D");
const shopping =
  "kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny";

const shoppingList = shopping.toLowerCase().split(" ").sort();
console.log(shoppingList);

console.log("\nZADANIE E");
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const reversedAlphabet = alphabet.join("").split("").reverse().join("");
console.log(reversedAlphabet);
