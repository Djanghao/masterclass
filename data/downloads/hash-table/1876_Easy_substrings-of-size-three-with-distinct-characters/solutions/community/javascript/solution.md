# Easy to understand JavaScript solution

**Author:** tzuyi0817
**Votes:** 14
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/1458854/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/1458854/)

---

	var countGoodSubstrings = function(s) {
		let good = 0;

		for (let index = 0; index < s.length - 2; index++) {
			const subStr = s.slice(index, index + 3);
			const set = new Set(subStr);

			set.size === 3 && (good += 1);
		}
		return good;
	};