# Rust "bottom up" DP

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/dungeon-game/solutions/5890243/](https://leetcode.com/problems/dungeon-game/solutions/5890243/)

---

"*Bottom up*" DP going from bottom of matrix to the top.
# Complexity
- Time complexity: $$O(m*n)$$

- Space complexity: $$O(n)$$

# Code
```Rust []
impl Solution {
    pub fn calculate_minimum_hp(dungeon: Vec<Vec<i32>>) -> i32 {
        let w = dungeon[0].len();
        let mut dp = vec![i32::MAX; w + 1];
        dp[w - 1] = 1;
        for row in dungeon.iter().rev() {
            for i in (0..w).rev() {
                dp[i] = dp[i].min(dp[i + 1])
                    .saturating_sub(row[i])
                    .max(1);
            }
        }
        dp[0]
    }
}
```