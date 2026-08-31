# Typescript with LPS, beats 100%

**Author:** user8363Lt
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-happy-prefix/solutions/5098690/](https://leetcode.com/problems/longest-happy-prefix/solutions/5098690/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Like KMP, generate a LPS table to store repetitions.

# Approach
<!-- Describe your approach to solving the problem. -->
Slightly change how LPS table is generated, to be more streamlined with the current applicaiton

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ - iterating through the table

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ - prefix table storage, lenght of string plus 1

# Code
```
function longestPrefix(s: string): string {
	const prefixTable: number[] = new Array(s.length + 1).fill(0);
	prefixTable[0] = -1;
	let k = -1;

	for (let i = 1; i <= s.length; i++) {
		while (k >= 0 && s[k] !== s[i - 1]) k = prefixTable[k];
		prefixTable[i] = ++k;
	}

	return s.substring(0, prefixTable[s.length]);
};
```