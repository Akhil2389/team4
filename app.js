
const prompt = require("prompt");
function add() {
prompt.start();

prompt.get(["num1", "num2"],
function (err, res) {
	if (err) {
	console.log(err);
	} else {
	var sum = parseFloat(res.num1)
		+ parseFloat(res.num2);
	console.log("Sum of " + res.num1
		+ " and " + res.num2 + " is " + sum);
	}
});
}
add();
