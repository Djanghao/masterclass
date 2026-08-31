# Simple Javascript Solution

**Author:** NatalieSalemme3
**Votes:** 21
**Link:** [https://leetcode.com/problems/flipping-an-image/solutions/602813/](https://leetcode.com/problems/flipping-an-image/solutions/602813/)

---

```
var flipAndInvertImage = function(A) {
		for(let row in A) {
			A[row] = A[row].reverse();
			A[row] = A[row].map(x => 1 - x);
		}
	return A;
};