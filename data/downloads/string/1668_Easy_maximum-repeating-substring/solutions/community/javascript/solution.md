# Easy to understand JavaScript solution

**Author:** tzuyi0817
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximum-repeating-substring/solutions/1343114/](https://leetcode.com/problems/maximum-repeating-substring/solutions/1343114/)

---

	var maxRepeating = function(sequence, word) {
		let result = 0;

		while (sequence.includes(word.repeat(result + 1))) {
			result += 1;
		};
		return result;
	};