# Rust bottom-up DP

**Author:** Minamikaze392
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/3360996/](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/3360996/)

---

# Complexity
- Time complexity: O(k * h * w * (h + w))

- Space complexity: O(h * w)

# Code
```
impl Solution {
    pub fn ways(pizza: Vec<String>, k: i32) -> i32 {
        let h = pizza.len();
        let w = pizza[0].len();

        // count[i][j] means the number of apples in a slice
        // which top-left cell is pizza[i][j] and
        // bottom-right corner is the bottom-right corner of the whole pizza.
        let mut count: Vec<Vec<i32>> = pizza.into_iter()
            .map(|s| s.chars()
                .map(|ch| if ch == 'A' { 1 } else { 0 })
                .collect())
            .collect();
        for i in (0..h - 1).rev() {
            count[i][w - 1] += count[i + 1][w - 1];
        }
        for j in (0..w - 1).rev() {
            count[h - 1][j] += count[h - 1][j + 1];
        }
        for i in (0..h - 1).rev() {
            for j in (0..w - 1).rev() {
                count[i][j] += count[i][j + 1] + count[i + 1][j] - count[i + 1][j + 1];
            }
        }
        let mut dp: Vec<Vec<i32>> = count.iter()
            .map(|v| v.iter()
                .map(|&x| x.signum())
                .collect()
            )
            .collect();
        
        let large = 1_000_000_007;
        for _ in 1..k {
            for i in 0..h {
                for j in 0..w {
                    dp[i][j] = 0;
                    for i2 in i + 1..h {
                        if count[i][j] > count[i2][j] && count[i2][j] != 0 {
                            dp[i][j] += dp[i2][j];
                            dp[i][j] %= large;
                        }
                    }
                    for j2 in j + 1..w {
                        if count[i][j] > count[i][j2] && count[i][j2] != 0 {
                            dp[i][j] += dp[i][j2];
                            dp[i][j] %= large;
                        }
                    }
                }
            }
        }
        dp[0][0]
    }
}
```