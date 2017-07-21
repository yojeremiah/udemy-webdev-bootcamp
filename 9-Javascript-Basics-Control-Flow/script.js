
// IF-ELSE PRACTICE
// var age = prompt("What is your age?");
// if (age < 0) {
// 	alert ("ERROR! HOW ARE YOU NOT EVEN BORN YET??");
// }
// else if (age === 21) {
// 	alert ("Happy 21st Bday!");
// }
// else if ((age % 2) == 1) {
// 	alert ("Your Age is Odd!");
// }
// else if (age % (Math.sqrt(age)) === 0) {
// 	alert ("Perfect square age!");
// }
// else {
// 	alert("Boring age lol");
// }

// WHILE-LOOP PRACTICE & FOR-LOOP PRACTICE
// print all numbers between -10 and 19
console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
// var x = -10;
// while (x <= 19){
// 	console.log(x);
// 	x++;
// }
for (var i = -10; i <= 19; i++){
	console.log(i);
}
// print all even numbers between 10 and 40
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
// var y = 10;
// while (y <= 40){
// 	console.log(y);
// 	y+=2;
// }
for (i = 10; i <= 40; i += 2){
	console.log(i);
}
// print all odd numbers between 300 and 333
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
// var z = 301;
// while (z <= 333){
// 	console.log(z);
// 	z+=2;
// }
for (i = 301; i <= 333; i += 2){
	console.log(i);
}
// print all numbers divisible by 5 AND 3 between 5 and 50
console.log("PRINT ALL NUMBERS DIVISIBLE BY BOTH 5 AND 3, BETWEEN 5 AND 50");
// var num = 5;
// while (num <= 50){
// 	if ((num % 5 === 0) && (num % 3 === 0 )) {
// 		console.log(num);
// 	}
// 	num++;
// }
for (i = 5; i <= 50; i++){
	if ((i % 5 === 0) && (i % 3 === 0)){
		console.log(i);
	}
}