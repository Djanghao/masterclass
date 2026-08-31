# JavaScript BigInt Dynamic Programming

**Author:** ektegjetost
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/2936485/](https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/2936485/)

---

I see there's a more clever way to do this, but given the constraints we can do some minor brute force by finding all the sums of each path and combining them at each point in the grid.

EDIT - updated per nskybytskyi's comments
So the plan is
- Use BigInt + bit manipulation to represent all the balances for each path.
- At each point in the grid, treat it like any other dynamic programming min path / path sum etc problem - combine all the path balances from ```(row - 1, col)``` and ```(row, col -1)``` using bit manipulation, like ```sums[row - 1][col] | sums[row][col - 1]```. This will be an ```O(n)``` operation which is ok given the constraints of a max 100x100 grid (which means we'll be doing max 100 * 100 * (however many ops bitint math takes) operations).
- Then if our current grid value is a 1, shift the combined path sum up one bit.
- At the end, check to see if we have a path sum at ```1n << (m + n) / 2n```
  - The reason this works is every path from ```(0, 0)``` to ```(m - 1, n - 1)``` has the same length (```m + n```). So if our ending state has a 1 at ```(m + n) / 2```, the only way that could be achieved is if half of the cells were 0s and half were 1s
  - To add, this check doesn't work with odd-length paths, but it should be obvious that no odd-length paths will be balanced anyway.

```javascript
var isThereAPath = function(grid) {
  const [m, n] = [grid.length, grid[0].length];
  const sums = grid.map((row) => row.map(() => 0n));
  sums[0][0] = 1n;
  
  // exclude odd-length paths
  if ((m + n) % 2 === 0) return false;
  
  for (let row = 1; row < m; row += 1) {
    sums[row][0] = sums[row - 1][0] << BigInt(grid[row][0]);
  }
  
  for (let col = 1; col < n; col += 1) {
    sums[0][col] = sums[0][col - 1] << BigInt(grid[0][col]);
  }
  
  for (let row = 1; row < m; row += 1) {
    for (let col = 1; col < n; col += 1) {
      sums[row][col] = (sums[row - 1][col] | sums[row][col - 1]) << BigInt(grid[row][col])
    }
  }
    
  return sums[m - 1][n - 1] & 1n << BigInt(m + n >> 1);
};
```