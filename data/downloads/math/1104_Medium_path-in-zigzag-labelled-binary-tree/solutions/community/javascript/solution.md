# ❇ Binary Tree Not Required👌 🏆O(N)❤️ Javascript❤️ Memory👀94.72%🕕 Meaningful Vars✍️ 🔴❇ ✅ 👉 💪🙏

**Author:** anurag-sindhu
**Votes:** 2
**Link:** [https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/3121699/](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/3121699/)

---

# Intuition
Binary Tree Not Required

# Approach
1. Create an array having all elements of every level till the level where our label element exists. Remeber to reverse the array for even number of levels. 
=> arr.reverse();
2. Find the index of element where label exist from the last level of above array. 
=> let indexOfLabelElement = array[array.length - 1].indexOf(label);
3. Find Parent of this level till we hit level 0. 
=> Math.floor(indexOfLabelElement / 2);

# Complexity
- Time complexity:
=> O(n)

- Space complexity:
=> O(n)

# Code
```
var pathInZigZagTree = function(label) {
	let array = [];
	let currentLevel = 0;
	let currentElement = 1;
	let totalElementsBuild = 0;
	while (totalElementsBuild < label) {
		let elementInCurrentLevel = Math.pow(2, currentLevel);
		totalElementsBuild += elementInCurrentLevel;
		const arr = [];
		while (elementInCurrentLevel--) {
			arr.push(currentElement++);
		}
		if (currentLevel % 2 !== 0) {
			arr.reverse();
		}
		array.push(arr);
		currentLevel++;
	}
	let indexOfLabelElement = array[array.length - 1].indexOf(label);
	const output = [ label ];
	for (let index = array.length - 2; index >= 0; index--) {
		indexOfLabelElement = Math.floor(indexOfLabelElement / 2);
		output.push(array[index][indexOfLabelElement]);
	}
	return output.reverse();
};
```