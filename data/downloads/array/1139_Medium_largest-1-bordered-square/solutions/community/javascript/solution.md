# Largest 1-Bordered Square || JAVASCRIPT || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-1-bordered-square/solutions/4455198/](https://leetcode.com/problems/largest-1-bordered-square/solutions/4455198/)

---

# Approach
Dynamic Programming and Prefix Sum 

# Complexity
- Time complexity:
O(h^2 * w^2)

- Space complexity:
O(h * w)

# Code
```
function largest1BorderedSquare(grid) {
 // Initialize dimensions and result
 let h = grid.length, w = grid[0].length, res = 0;
 // Create DP arrays to store prefix sums of 1s in rows and columns
 let dp1 = new Array(h).fill(0).map(() => new Array(w).fill(0));
 let dp2 = new Array(h).fill(0).map(() => new Array(w).fill(0));
 // Calculate prefix sums for rows and columns
 for (let y = 0; y < h; y++) {
   for (let x = 0; x < w; x++) {
     dp1[y][x] = x > 0 ? (dp1[y][x - 1] + 1) * grid[y][x] : grid[y][0];
     dp2[y][x] = y > 0 ? (dp2[y - 1][x] + 1) * grid[y][x] : grid[0][x];
   }
 }
 // Iterate through potential square corners
 for (let y = 0; y < h; y++) {
   for (let x = 0; x < w; x++) {
     if (grid[y][x] === 1) {
       // Expand potential squares from the current corner
       let x2 = x, y2 = y;
       while (y2 < h && x2 < w) {
         // Check if current square is 1-bordered using prefix sums
         if (check(x, y, x2, y2)) {
           res = Math.max(res, (x2 - x + 1) * (y2 - y + 1));
         }
         x2++;
         y2++;
       }
     }
   }
 }
 return res;
}
```