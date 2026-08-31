# [Rust] Bottom up dynamic programming

**Author:** rudy__
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-game/solutions/2707823/](https://leetcode.com/problems/stone-game/solutions/2707823/)

---

<center> 
<img src="https://file.ddot.cc/imagehost/2022/3a96b39a-01f1-4d76-a50a-fc34c769256c.png" width=823pt> 
</center> 

```rust

impl Solution {
    pub fn stone_game(piles: Vec<i32>) -> bool {
        let n = piles.len();
        let mut dp = vec![vec![0; n]; n];
        for gap in 0..n {
            for i in 0..n - gap {
                let j = i + gap;
                if i == j {
                    dp[i][j] = piles[i];
                } else if gap == 1 {
                    dp[i][j] = std::cmp::max(piles[i], piles[j]);
                } else {
                    dp[i][j] = std::cmp::max(
                        piles[i] + std::cmp::min(dp[i + 2][j], dp[i + 1][j - 1]),
                        piles[j] + std::cmp::min(dp[i + 1][j - 1], dp[i][j - 2]),
                    );
                }
            }
        }
        dp[0][n - 1] > piles.iter().sum::<i32>() / 2
    }
}
```


`dp[i][j]` is the maximum score Alex can get if she plays optimally and starts first. `gap` is the number of stone subsequences. 

The cases when `gap=0 or 1` is trivial. 
When `gap > 1`, we have two sub cases to consider, in which the first one is when Alex chooses to pick  `piles[i]`,  and by doing this her best score is `case1 = piles[i] + min(dp[i+2][j], dp[i+1][j-1])`. 
We use `min` instead of `max` because: once Alex chooses to pick  `piles[i]`,  Bob will try to get the maximum score from the rest stones, let `S` be the sum of the rest stones.  Bob can either choose 
- `dp[i+1]`, in this case, Alex score `dp[i+2][j]` from `stones[i+2..j]`, or 
- `dp[j]`, in this case, Alex score `dp[i+1][j-1]` from `stones[i+1..j-1]` 

To get a best score `S - min(dp[i+2][j], dp[i+1][j-1])`,  Bob have to ensure Alex can only score `min(dp[i+2][j], dp[i+1][j-1])` once she pick `piles[i]`. 
The case Alex chooses `piles[j]` is similar.