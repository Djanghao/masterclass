# Rust 2d bottom-up dp

**Author:** Martician
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/4649085/](https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/4649085/)

---

# Explanation:
We define ```dp[i][j]``` to be the minimum cost associated with merging the stone piles in the range ```[i, j]``` as much as possible:
```
dp[i][j] = min(dp[i][mid] + dp[mid+1][j])
for i <= mid < j, mid = i + (k - 1) * some_number
```
Think of ```mid``` is a separator. At the end of the merge you will end up with at least one pile, we want the first pile to be formed by the piles in range ```[i, mid]```. The rest of the piles in ```[mid + 1, j]``` will be merged into a maximum of ```k-1``` piles. Then we will end up with ```1 + x piles (1 pile from [i, mid] and x < k piles from [mid+1, j])``` and the cost for ```dp[i][j]``` would be the minimum cost for merging the piles in ```[i, j]``` into ```x + 1``` piles: ```min(dp[i][mid] + dp[mid+1][j])```. Except when we end up with k piles (in the case of```x = k - 1```) then we do one last merge into a single pile which will cost $\\sum_{i = 1}^{j} stones[i]$
# Code:
```
impl Solution {
    pub fn merge_stones(stones: Vec<i32>, k: i32) -> i32 {
        let k = k as usize;
        let n = stones.len();
        if (n - 1) % (k - 1) != 0 {
            return -1;
        }

        let mut prfx_sums = Vec::with_capacity(n + 1);
        prfx_sums.push(0);
        for i in 0..n {
            prfx_sums.push(prfx_sums[i] + stones[i]);
        }

        let mut dp = vec![vec![0; n]; n];
        for m in k..=n {
            for i in 0..=n - m {
                let j = i + m - 1;
                dp[i][j] = (i..j)
                    .step_by(k - 1)
                    .map(|mid| dp[i][mid] + dp[mid + 1][j])
                    .min()
                    .unwrap();
                if (j - i) % (k - 1) == 0 {
                    dp[i][j] += prfx_sums[j + 1] - prfx_sums[i];
                }
            }
        }

        dp[0][n - 1]
    }
}

```

This a Rust port of the bottom-up dp [solution](https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/247567/java-c-python-dp/) provided by user [@lee215](https://leetcode.com/lee215/).