# O(n^2) DP

**Author:** hucancode
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-vii/solutions/3978514/](https://leetcode.com/problems/stone-game-vii/solutions/3978514/)

---

# Observation
- Given nature of the game, Alice will always has bigger score than Bob
- Alice wants to maximize the difference, the optimal strategy would be maximize her score
- Thus Bob has to maximize his score to keep up. So both players would want to maximize their score, and we do not have to keep track of turn

# Approach
- Pre calculate a prefix sum, so we can query $sum(i,j)$ in $O(1)$
- Let $f(i,j)$ be the maximum difference could be archived if we play game with only $stones[i,j]$. $f(i,j) = max(x, y)$, where:
    - $x$ be the score if we discard $stone[i]$, $x = sum(i+1,j) - f(i+1,j)$
    - $y$ be the score if we discard $stone[j]$, $y = sum(i,j-1) - f(i,j-1)$

# Complexity
- Time complexity: $O(n^2)$
- Space complexity: $O(n^2)$

# Code
```
use std::cmp::max;
impl Solution {
    pub fn stone_game_vii(stones: Vec<i32>) -> i32 {
        let n = stones.len();
        let mut prefix = vec![0;n+1];
        for i in 1..=n {
            prefix[i] = prefix[i-1] + stones[i-1];
        }
        let mut f = vec![vec![0;n];n];
        for len in 2..=n {
            for i in 0..n-1 {
                let mut j = i+len-1;
                if j >= n {
                    continue;
                }
                let sum_i = prefix[j+1] - prefix[i+1];
                let sum_j = prefix[j] - prefix[i];
                let discard_i = sum_i - f[i+1][j];
                let discard_j = sum_j - f[i][j-1];
                f[i][j] = max(discard_i, discard_j);
                //println!("calculate state {i}~{j}");
                //println!("discard {i} -> {discard_i}, discard {j} -> {discard_j}");
                //println!("f[{i}][{j}] = {}", f[i][j]);
            }
        }
        //println!("{f:?}");
        return f[0][n-1];
    }
}
```