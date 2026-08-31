# Rust Solutions

**Author:** user7339eb
**Votes:** 3
**Link:** [https://leetcode.com/problems/frog-jump/solutions/4323578/](https://leetcode.com/problems/frog-jump/solutions/4323578/)

---


# Code
```
use std::collections::BTreeSet;

impl Solution {
    pub fn can_cross(stones: Vec<i32>) -> bool {
        Self::solve(&stones, &mut vec![BTreeSet::new(); stones.len()], 1)
    }

    fn solve(stones: &[i32], dp: &mut [BTreeSet<i32>], k: i32) -> bool {
        stones.len() == 1
            || (!dp[0].contains(&k)
                && match stones.binary_search(&(stones[0] + k)) {
                    Ok(0) | Err(_) => false,
                    Ok(i) => (-1..=1).any(|j| {
                        Self::solve(&stones[i..], &mut dp[i..], k + j) || {
                            dp[0].insert(k);
                            false
                        }
                    }),
                })
    }
}
```