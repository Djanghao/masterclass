# row wise DP

**Author:** bryceat
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/3452712/](https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/3452712/)

---

# Intuition
Every sub matrix of all ones has a top row of all ones.
Ever row of all ones has a left end point which is the top left entry of the matrix.

# Approach
In the first nested for loop we construct dp where dp[r][c] is the with of the widest row of ones with (r,c) as the left end
point.  
In the second set of nested for loops we count the number submatrices with top left corner (r,c) for each height (which means the bottom left corner is (k,c)).

# Complexity
- Time complexity:
$$O(n^3)$$

- Space complexity:
$$O(n^2)$$

# Code
```
impl Solution {
    pub fn num_submat(mat: Vec<Vec<i32>>) -> i32 {
        let mut dp = mat.clone();
        let rows = mat.len();
        let cols = mat[0].len();
        for r in 0..rows {
            for c in (0..cols - 1).rev() {
                if dp[r][c] == 1 {
                    dp[r][c] += dp[r][c+1];
                }
            }
        }
        let mut ans = 0;
        for r in 0..rows {
            for c in 0..cols {
                if dp[r][c] > 0 {
                    let mut cur = dp[r][c];
                    for k in r..rows {
                        cur = cur.min(dp[k][c]);
                        ans += cur;
                    }
                }
            }
        }
        ans
    }
}
```