# JS beats 100%

**Author:** GoldCoastKim3984
**Votes:** 7
**Link:** [https://leetcode.com/problems/orderly-queue/solutions/2782862/](https://leetcode.com/problems/orderly-queue/solutions/2782862/)

---

# Intuition
Can I return just smallest string?
-> No, when the k is 1, it is limited but it is easy to get smallest one.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
When the k is 2 or greater, we can get all permutations of s. So, we can return smallest string.
When the k is 1 and s.length is 3, for example,
we can consider all possible permutation 
abc, bca, cab
Number of possible permutation is same as s.length.
I prefer bruteforce search
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
 	let res = s;

	if (k === 1) {
		let l = s.length;
		for (let i=0; i<l; i++) {
			let c = s[0];
			s = s.substring(1, l) + c;
			if (s < res)
				res = s; 
		}

		return res;
	}

	return [...s].sort().join('');
   
};
```