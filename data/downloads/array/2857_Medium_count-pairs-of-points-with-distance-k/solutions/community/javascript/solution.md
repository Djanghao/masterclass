# 2857. Count Pairs of Points With Distance k

**Author:** pgmreddy
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/5277063/](https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/5277063/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

---

**FAIL - brute force**

```
var countPairs = function (coordinates, k) {
	const n = coordinates.length;
	let cc = 0;
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			const [x1, y1] = coordinates[i];
			const [x2, y2] = coordinates[j];
			const d = (x1 ^ x2) + (y1 ^ y2);
			if (d === k) cc++;
		}
	}
	return cc;
};
```

---

**PASS**

```
var countPairs = function (coordinates, k) {
	/*
        for  [x1,y1] [x2,y2]
        find  x1 ^ x2 + y1 ^ y2 = k
        so if    a    +    b    = k
        =>    x1 ^ x2 = a   and   y1 ^ y2 = b
        =>    x1 ^ a  = x2  and   y1 ^ b  = y2
        so find how many [x2,y2] that are equal to [x1 ^ a, y1 ^ b], where  a + b = k
    */
	let sum = 0;
	const dp = {};
	for (const [x1, y1] of coordinates) {
		for (let a = 0; a <= k; a++) {
			// get a+b=k
			const b = k - a;
			// get [x2,y2] = [x1 ^ a, y1 ^ b]
			const x2 = x1 ^ a;
			const y2 = y1 ^ b;
			sum += dp[x2]?.[y2] || 0;
		}
		dp[x1] = dp[x1] || {};
		dp[x1][y1] = dp[x1][y1] || 0;
		dp[x1][y1]++;
	}
	return sum;
};
```

---
