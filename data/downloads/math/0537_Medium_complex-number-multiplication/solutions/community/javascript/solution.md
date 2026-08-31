# Simple JavaScript solution

**Author:** wolf20482
**Votes:** 2
**Link:** [https://leetcode.com/problems/complex-number-multiplication/solutions/3205195/](https://leetcode.com/problems/complex-number-multiplication/solutions/3205195/)

---

# Approach
Use the following identity: $$(a+bi)(c+di)=(ac\u2212bd)+(ad+bc)i$$

# Code
```
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
	var a = parseInt(num1.split("+")[0]);
	var b = parseInt(num1.split("+")[1].replace("i", ""));
	var c = parseInt(num2.split("+")[0]);
	var d = parseInt(num2.split("+")[1].replace("i", ""));
	return `${a * c - b * d}+${a * d + b * c}i`;
};
```