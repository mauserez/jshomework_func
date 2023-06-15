function clearConsoleAndGoNext() {
	alert("Следующее задание");
	console.clear();
}

// 1 задание

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
clearConsoleAndGoNext();
console.log(
	`2 задание - вывести тип вводных данных, \nесли не boolean,number,string то Тип х не определен`
);
