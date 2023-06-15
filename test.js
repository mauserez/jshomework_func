function clearConsoleAndGoNext(excersizeNumber = 1) {
	alert(`-> ${excersizeNumber} задание`);
	console.clear();
}

clearConsoleAndGoNext(1);
// 1 задание
console.log(
	`1 задание - Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
	\nЕсли в массиве есть нулевой элемент, то он учитывается и выводится отдельно. `
);

function calcEvenOddElements() {
	let oddValues = [];
	let evenValues = [];
	let zeroValues = [];
	let otherValues = [];

	elementArr.forEach((item, index, array) => {
		if (typeof item === "number") {
			if (item !== 0) {
				if (item % 2 === 0) {
					evenValues.push(item);
				} else {
					oddValues.push(item);
				}
			}

			if (item === 0) {
				zeroValues.push(item);
			}
		} else {
			otherValues.push(item);
		}
	});

	console.log(`Массив ` + elementArr.join(","));
	console.log(`Нулевые ${zeroValues.length} шт. [${zeroValues.join(",")}]`);
	console.log(`Нечетные ${oddValues.length} шт. [${oddValues.join(",")}]`);
	console.log(`Четные ${evenValues.length} шт. [${evenValues.join(",")}]`);
	console.log(`Другие ${otherValues.length} шт. [${otherValues.join(",")}]`);
}

let elementArr = [
	1,
	2,
	3,
	"$",
	4,
	0,
	16,
	null,
	"null",
	typeof undefined,
	Boolean,
];
calcEvenOddElements(elementArr);

// 2 задание
clearConsoleAndGoNext(2);
console.log(
	`2 задание - Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет,
	является ли оно простым, и выводит, простое число или нет.
	\nЕсли введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.`
);
function checkPrimeNumber() {
	// Привожу к числу. По умолчанию ставлю 2. Первое простое число
	let primeNumber = Number(prompt("Введите простое число не больше 1000", 2));

	// Здесь зацикливаю скрипт если ввели не то что хочу.
	if (primeNumber >= 1000 || primeNumber === "NaN") {
		alert("Данные неверны");
		checkPrimeNumber();
		return;
	}

	let isPrime = true;
	if (primeNumber < 2) {
		isPrime = false;
	} else {
		// Подсмотрено в интернете. Разобрался как работает
		for (let i = 2, s = Math.sqrt(primeNumber); i <= s; i++) {
			if (primeNumber % i === 0) {
				isPrime = false;
			}
		}
	}

	let isPrimeText = isPrime === true ? "простое" : "не простое";

	return `${primeNumber} ${isPrimeText} число`;
}
console.log(checkPrimeNumber);
console.log(checkPrimeNumber());

// 3 задание
clearConsoleAndGoNext(3);
console.log(
	`3 задание - Напишите функцию, которая принимает число как аргумент и возвращает функцию,
	которая также принимает число как аргумент и возвращает сумму этих двух чисел. \nВыведите в консоль результат.`
);

function sum(a = 0) {
	return function (b = 0) {
		return a + b;
	};
}
const summary = sum(2);
console.log(sum(1)());
console.log(sum(1)(1));
console.log(sum()(3));

// 4 задание
clearConsoleAndGoNext(4);
console.log(
	`4 задание - Напишите функцию, которая принимает два числа.
	\nКаждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. Используйте setInterval.
	\nНапример, пользователь ввёл числа 5 и 15.
	\nКаждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).`
);

(function numberChain(a, b) {
	const intervalId = setInterval(function () {
		console.log(a);
		if (a === b) {
			clearInterval(intervalId);
		}
		a++;
	}, 1000);
})(5, 15);

// 5 задание
setTimeout(function () {
	clearConsoleAndGoNext(5);
	console.log(
		`5 задание - Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
	\nИначе говоря, умножает x на себя n раз и возвращает результат.
	\nИспользуйте Arrow Function синтаксис.
	\nПротестируйте функцию на любых значениях и выведите результат в консоль.`
	);

	//Если не передан параметр b то возвращаю в 1 степени
	const toPow = (a, b = 1) => {
		//Я бы сделал это так))) return Math.pow(a, b);

		//Здесь проверка на null,undefined
		function checkValue(v) {
			return [null, undefined].includes(v);
		}

		//Привожу к числам
		let aNum = Number(a);
		let bNum = Number(b);

		//Обработка и вывод если всё нормально.
		if (checkValue(a)) {
			return "Не хватает параметров";
		}

		if (aNum === "NaN" || bNum === "NaN") {
			return "В параметрах передано не число";
		}

		let val = 1;
		for (let i = 0; i < b; i++) {
			val *= a;
		}

		return val;
	};

	console.log(toPow(2, 3));
	console.log(toPow(5, 2));
	console.log(toPow(10, 3));
	console.log(toPow(undefined));
}, 12000);
