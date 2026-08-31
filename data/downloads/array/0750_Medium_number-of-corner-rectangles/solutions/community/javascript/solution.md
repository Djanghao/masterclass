# Javascript - top down, recursive, memoization, explanation

**Author:** quadcoders
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-corner-rectangles/solutions/1802795/](https://leetcode.com/problems/number-of-corner-rectangles/solutions/1802795/)

---

```
/** https://leetcode.com/problems/number-of-corner-rectangles/solution/
 * @param {number[][]} grid
 * @return {number}
 */
var countCornerRectangles = function(grid) {
  // Memo
  this.memo = new Map();
  
  return dp(grid, 0);
};

var dp = function(grid, r) {
  // Base case
  if (r === grid.length) {
    return 0;
  }
  
  // Recurrence relationship
  let count = dp(grid, r + 1);
  
  // For every row, we try to find pair of cell that has value 1 to indicate one side of the rectangle's (top or bottom side)
  for (let c1 = 0; c1 < grid[0].length; c1++) {
    for (let c2 = c1 + 1; c2 < grid[0].length; c2++) {
      // If either cell's value is 0, we don't have pair
      if (grid[r][c1] === 0 || grid[r][c2] === 0) {
        continue;
      }
      
      // We have a pair, create key and store in memo
      let key = `${c1}_${c2}`;
      if (this.memo.has(key) === true) {
        // Memo exist, update it
        this.memo.set(key, [...this.memo.get(key), r]);
      }
      else {
        // Memo doesn't exist, create new one
        this.memo.set(key, [r]);
      }
      
      // Count how many pair with same coordinate, `c1` and `c2`
      // Since this top down approach evaluate last row, we look for pair with same coordinate after current row to find rectangle corners
      count += this.memo.get(key).filter(x => x > r).length;
    }
  }
  
  return count;
};
```