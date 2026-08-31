# JavaScript solution: One liner.

**Author:** rakeshchandrasheker
**Votes:** 16
**Link:** [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/897413/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/897413/)

---

```js 
var countNegatives = function(grid) {
    return grid.flat().filter(ele => ele < 0).length;
	// Time Complexity: O(m*n)
    // Space Complexity: O(n)
};