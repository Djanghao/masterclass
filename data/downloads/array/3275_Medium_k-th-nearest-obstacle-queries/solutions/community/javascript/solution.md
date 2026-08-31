# 3275. K-th Nearest Obstacle Queries

**Author:** pgmreddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5720943/](https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5720943/)

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
1
```javascript []
var resultsArray = function (queries, k) {
	const distance = ([x, y]) => Math.abs(x) + Math.abs(y);
	const res = new Array(queries.length).fill(-1);
	const pq = new PriorityQueue({ compare: (a, b) => b - a });
	let count = 0;
	for (const query of queries) {
		pq.enqueue(distance(query));
		count++;
		if (count >= k) {
			if (count > k) pq.dequeue();
			res[count - 1] = pq.front();
		}
	}
	return res;
};
```

---

2
```javascript []
var resultsArray = function (queries, k) {
	const distance = ([x, y]) => Math.abs(x) + Math.abs(y);
	const res = new Array(queries.length).fill(-1);
	const pq = new PriorityQueue({ compare: (a, b) => b - a });
	queries.forEach((query, i) => {
		pq.enqueue(distance(query));
		if (pq.size() > k) pq.dequeue();
		if (pq.size() === k) res[i] = pq.front();
	});
	return res;
};
```

---

3
```javascript []
var resultsArray = function (queries, k) {
	const res = new Array(queries.length).fill(-1);
	const pq = new PriorityQueue({ compare: (a, b) => b - a });
	queries.forEach(([x, y], i) => {
		pq.enqueue(Math.abs(x) + Math.abs(y));
		if (pq.size() > k) pq.dequeue();
		if (pq.size() === k) res[i] = pq.front();
	});
	return res;
};
```
---
