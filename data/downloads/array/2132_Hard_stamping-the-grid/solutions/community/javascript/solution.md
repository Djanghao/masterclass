# [JavaScript] Solution + Explanation (faster than 100.00% of JavaScript online submissions)

**Author:** zachanton
**Votes:** 1
**Link:** [https://leetcode.com/problems/stamping-the-grid/solutions/1680321/](https://leetcode.com/problems/stamping-the-grid/solutions/1680321/)

---

**Explanation**
As it's explained in https://leetcode.com/problems/stamping-the-grid/discuss/1675344/Python-2d-cumulative-sums-explained

We can divide the problem into 3 path:

1) Create dp matrix- sum of cells in the rectangle, where (0, 0) is the left upper corner in the matrix, (i, j) is the rigth down corner in the matrix
For example, if given grid is 
```
[
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 0, 0, 1],
	[0, 0, 0, 1, 1]
]
```

dp will be:
```
[
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 1, 1, 1 ],
  [ 0, 0, 0, 1, 1, 2 ],
  [ 0, 0, 0, 1, 2, 4 ]
]
```

2) We can put our stamp, such that its left upper corner is in point (i, j) if the sum inside a rectangle bordered with ``[(i - stampHeight, j - stampWidth), (i - stampHeight, j), (i, j - stampWidth), (i, j)]`` is zero

For example 
stampHeight = 2, stampWidth = 2
for i = 1, j = 3 answer is true
```
[
	[0, 0, 0,  0 , 0 ],
	[0, 0, 0, *0*,*0*],
	[0, 0, 1, *0*,*0*],
	[0, 0, 0,  0 , 1 ],
	[0, 0, 0,  1 , 1 ]
]
```
 isFitPossible = dp[i + stampHeight][j + stampWidth]  - dp[i + stampHeight][j] - dp[i][j + stampWidth] + dp[i][j] === 0
 
3) If ``isFitPossible`` is true then mark the start of the stamp with 1, borders with -1:
For example, let's imagine first 1D situation, where we have array [0, 0, 0, 0, 0, 0, 0] and we want to update values in range 1, 4. Then answer will be  [0, 1, 0, 0, 0, -1, 0]

**Complexity**
O(mn)

**Solution**

```
/**
 * @param {number[][]} grid
 * @param {number} stampHeight
 * @param {number} stampWidth
 * @return {boolean}
 */
var possibleToStamp = function(grid, stampHeight, stampWidth) {
    const w = grid[0].length;
    const h = grid.length;
    
    // dp[i + 1][j + 1] - sum of cells in the rectangle, where 
    // (0, 0) is the left upper corner in the matrix, 
    // (i, j) is the rigth down corner in the matrix
    function getSumOfRectangle(matrix) {
        const h = matrix.length;
        const w = matrix[0].length;
        const dp = new Array(h + 1);
        dp[0] = new Array(w + 1).fill(0);
        for (let i = 0; i < h; i++) {
            dp[i + 1] = new Array(w + 1);
            dp[i + 1][0] = 0;
            for (let j = 0; j < w; j++) {
                dp[i + 1][j + 1] = dp[i + 1][j] + dp[i][j + 1] - dp[i][j] + matrix[i][j];
            }
        } 
        return dp;
    }
    

    const dp = getSumOfRectangle(grid);
    
    // diff[i][j] === 1 <- start of the stamp (its left upper corner is in point (i, j))
    // diff[i][j] === -1 <- a border of the stamp 
    // (its corner is either (i, j - 1) or (i - 1, j) or (i - 1, j - 1))
    const diff = new Array(h + 1);
    
    // 1) fill diff with zeros
    for (let i = 0; i <= h; i++) {
        diff[i] = new Array(w + 1).fill(0);
    }
    
    for (let i = 0; i <= h - stampHeight; i++) {
        for (let j = 0; j <= w - stampWidth; j++) {
            // isFitPossible === 0 <- we can put the stamp, 
            // such that its left upper corner is in point (i, j)
            // isFitPossible > 0 <- we can't put the stamp, 
            // such that its left upper corner is in point (i, j)
            const isFitPossible = 
                  dp[i + stampHeight][j + stampWidth] 
                  - dp[i + stampHeight][j]
                  - dp[i][j + stampWidth]
                  + dp[i][j]
            
            if (isFitPossible === 0) {
                diff[i][j] += 1;
                diff[i][j + stampWidth] += -1;
                diff[i + stampHeight][j] += -1;
                diff[i + stampHeight][j + stampWidth] += 1;
            }
        }  
    }
    
    const dp2 = getSumOfRectangle(diff);
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (dp2[i + 1][j + 1] === 0 && grid[i][j] != 1) {
                return false;
            }
        }
    }
    return true;
};
```

If you have any questions, feel free to ask. If you like solution and explanations, please **Upvote!**