# Rust solution

**Author:** dacozai
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/4814516/](https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/4814516/)

---

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn count_submatrices(mut grid: Vec<Vec<i32>>, k: i32) -> i32 {
        let mut ans = 0i32;
        for i in 0..grid.len() {
            for j in 1..grid[i].len() {
                grid[i][j] += grid[i][j-1];
            }
        }

        for c in 0..grid[0].len() {
            let mut sumup = 0i32;
            for r in 0..grid.len() {
                sumup += grid[r][c];
                if sumup <= k {
                    ans += 1;
                } else {
                    break;
                }
            }
        }

        ans
    }
}
```