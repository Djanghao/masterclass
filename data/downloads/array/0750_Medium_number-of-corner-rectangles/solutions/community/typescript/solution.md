# Typescript Solution O(row*col^2)

**Author:** amikudev11
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-corner-rectangles/solutions/5230847/](https://leetcode.com/problems/number-of-corner-rectangles/solutions/5230847/)

---

# Intuition
For each row, we need to match the tuple (i,j) where grid[row][i] and grid[row][j] is 1. So we make grid[col][col] where we are keeping count of presence of tuple[i][j] for different layers. Once this is done, we can simply count of ways of selection 2 for each memo[i][j];

# Approach
<!-- Describe your approach to solving the problem. -->
It is a wonderful technique to map a one d array to 2d matrix, where we need to consider 2 indexes of the matrix.

# Complexity
- Time complexity: O(row*col^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(row*col)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countCornerRectangles(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;

    const memo: number[][] = new Array<number[]>(n).fill([]).map(x => new Array<number>(n).fill(0));

    for(let row=0; row<m; row++) {
        //only care about grid[row] here
        for(let i=0; i<n-1; i++) {
            for(let j=i+1; j<n; j++) {
                if(grid[row][i]===1 && grid[row][j]===1) {
                    memo[i][j]++;
                }
            }
        }
    }

    let ans = 0;

    for(let i=0; i<n; i++) {
        for(let j=i+1; j<n; j++) {
            if(memo[i][j] > 1) {
                ans += (memo[i][j] * (memo[i][j]-1))/2;
            }
        }
    }

    return ans;
};
```