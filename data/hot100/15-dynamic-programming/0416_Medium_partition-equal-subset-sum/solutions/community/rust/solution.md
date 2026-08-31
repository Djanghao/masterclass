# Rust bottom-up dp

**Author:** wddwycc
**Votes:** 3
**Link:** [https://leetcode.com/problems/partition-equal-subset-sum/solutions/1049511/](https://leetcode.com/problems/partition-equal-subset-sum/solutions/1049511/)

---

```rust
impl Solution {
    pub fn can_partition(nums: Vec<i32>) -> bool {
        let target: i32 = nums.iter().sum();
        if target % 2 != 0 {
            return false;
        }
        let target = target / 2;

        // Trasforms the question into:
        // Is it possible for subset of nums to sum up to target

        // If enumerate all subsets, time would be O(2 ** n). as n can reach 200, would cause time exceed.

        // Try use bottom-up dp
        // Given function f(i, v) -> bool, represents whether first i + 1 elements can sum up to v
        // for i == 0, f(0, v) = nums[0] == v (bottom case)
        // for i > 0,  f(i, v) = f(i - 1, v - nums[i]) || f(i - 1, v)
        // so we can have our 2d dp
        let mut dp = vec![vec![false; target as usize]; nums.len()];
        for i in 0..nums.len() {
            if i == 0 {
                for v in 1..=target {
                    dp[0][v as usize - 1] = nums[0] == v;
                }
            } else {
                for v in 1..=target {
                    dp[i][v as usize - 1] = {
                        let minus = v - nums[i];
                        if minus < 0 {
                            dp[i - 1][v as usize - 1]
                        } else if minus == 0 {
                            true
                        } else {
                            dp[i - 1][v as usize - 1] || dp[i - 1][minus as usize - 1]
                        }
                    }
                }
            }
            if dp[i][target as usize - 1] {
                return true;
            }
        }
        false
    }
}
```

Further, because f(i, v) only relies top-left items in the diagram, we can downgrade the dp into 1 dimensional

```rust 
impl Solution {
    pub fn can_partition(nums: Vec<i32>) -> bool {
        let target: i32 = nums.iter().sum();
        if target % 2 != 0 {
            return false;
        }
        let target = target / 2;

        let mut dp = vec![false; target as usize];
        for i in 0..nums.len() {
            if i == 0 {
                for v in 1..=target {
                    dp[v as usize - 1] = nums[0] == v;
                }
            } else {
                for v in (1..=target).rev() {
                    dp[v as usize - 1] = {
                        let minus = v - nums[i];
                        if minus < 0 {
                            dp[v as usize - 1]
                        } else if minus == 0 {
                            true
                        } else {
                            dp[v as usize - 1] || dp[minus as usize - 1]
                        }
                    }
                }
            }
            if dp[target as usize - 1] {
                return true;
            }
        }
        false
    }
}
```
