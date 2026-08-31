# Two Javascript solutions: balance counter O(n) O(1) and stack O(n) O(n)

**Author:** amerikan
**Votes:** 31
**Link:** [https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/443447/](https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/443447/)

---

Time: O(n)
Space: O(1)

```js
var balancedStringSplit = function(s) {
    
    let matches = 0;
	let balance = 0;

	for (let i = 0; i < s.length; i++) {

		if (s[i] === "R") {
			balance -= 1;
		} else if (s[i] === "L") {
			balance += 1;
		}

		if (balance === 0) {
			matches += 1;
		}
	}

	return matches;
};
```

Using a stack data structure.

Time: O(n)
Space: O(n) 

```js

var balancedStringSplit = function(s) {
    
    let matches = 0;
	const stack = [];

	stack.push(s[0]);

	for (let i = 1; i < s.length; i++) {

		const top = stack[stack.length - 1];

		if (top !== undefined && top !== s[i]) {
			stack.pop()
		} else {
			stack.push(s[i]);
		}

		if (stack.length === 0) {
			matches += 1;
		}
	}

	return matches;
};

```