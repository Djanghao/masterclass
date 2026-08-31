# my_countDigits

**Author:** RinatMambetov
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/3512255/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/3512255/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

<!-- # Complexity
- Time complexity: -->
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

<!-- - Space complexity: -->
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
	let tempNum = num;
	let count = 0;

	while (tempNum !== 0) {
		let digit = tempNum % 10;
		if (num % digit === 0) {
			count++;
		}
		tempNum = Math.floor(tempNum / 10);
	}

	return count;
};
```