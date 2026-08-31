# Typescript | Rust | Memoized recursive solution

**Author:** manishdoley
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum-ii/solutions/5076713/](https://leetcode.com/problems/minimum-falling-path-sum-ii/solutions/5076713/)

---

**Intuition**
1. Go through each row and pass down the col traversed to the next recursive call
2. Keep adding the sum
3. Return when the last row is reached
4. Store the minimum and return if there is stored value 

**Typescript**
```
let n: number;
let t: number[][];

function solve(row: number, col: number, grid: number[][]): number {
    if (row === n - 1) {
        return grid[row][col];
    }

    if (t[row][col] !== -1) {
        return t[row][col];
    }

    let ans = Infinity;
    for (let nextCol = 0; nextCol < n; nextCol++) {
        if (nextCol !== col) {
            ans = Math.min(ans, solve(row + 1, nextCol, grid));
        }
    }

    return t[row][col] = grid[row][col] + ans;
}

function minFallingPathSum(grid: number[][]): number {
    n = grid.length;
    t = new Array(n).fill(undefined).map(() => new Array(n).fill(-1));

    let result = Infinity;
    for (let col = 0; col < n; col++) {
        result = Math.min(result, solve(0, col, grid));
    }

    return result;
}
```

**Rust**
```
impl Solution {
    pub fn min_falling_path_sum(grid: Vec<Vec<i32>>) -> i32 {
        let n = grid.len();
        let mut t = vec![vec![-1; n]; n];
        
        fn solve(row: usize, col: usize, grid: &Vec<Vec<i32>>, t: &mut Vec<Vec<i32>>) -> i32 {
            let n = grid.len();
            if row == n - 1 {
                return grid[row][col];
            }

            if t[row][col] != -1 {
                return t[row][col];
            }
            
            let mut ans = i32::MAX;
            for next_col in 0..n {
                if next_col != col {
                    ans = ans.min(solve(row + 1, next_col, grid, t));
                }
            }

            t[row][col] = grid[row][col] + ans;
            t[row][col]
        }
        
        let mut result = i32::MAX;
        for col in 0..n {
            result = result.min(solve(0, col, &grid, &mut t));
        }

        result
    }
}
```

**Time complexity:** O(n * n)
**Space complexity:** O(n * n)

Do upvote if you got any value