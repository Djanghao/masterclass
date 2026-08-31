# Rust iterator with single expression (0ms)

**Author:** stevenylai
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-champion-i/solutions/6084300/](https://leetcode.com/problems/find-champion-i/solutions/6084300/)

---

# Intuition
Since there is no tie, we can compare every pair of players (0, 1), (1, 2), (2, 3) ...

# Approach
We can use iterator to achieve this

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```rust []
impl Solution {
    pub fn find_champion(grid: Vec<Vec<i32>>) -> i32 {
        (1..grid.len())
          .fold(0_usize, |i, j| {
            if grid[i][j] == 1 {
                i
            } else {
                j
            }
          }) as i32
    }
}
```