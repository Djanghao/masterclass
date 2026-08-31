# Rust single chain solution, 11ms beats 100%

**Author:** sdvorchin
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-bad-pairs/solutions/4876583/](https://leetcode.com/problems/count-number-of-bad-pairs/solutions/4876583/)

---

# Intuition
Rewrite the condition:
```
j - i != nums[j] - nums[i] -> j - nums[j] != i - nums[i]
```
If you apply the transform `nums[i] -> i - nums[i]` to `nums`, the question becomes "how many pairs of different numbers can you select from the vec?" To answer that, count up the occurences of each distinct `i - nums[i]`. Let's say there are `k` occurences where `i - nums[i] == m`. That means there are `nums.len() - k` occurences where `i - nums[i] != m`. Naturally, there are `k * (nums.len() - k)` different bad pairs where one of the elements satisfies `i - nums[i] == m`. So, let's sum up `k * (nums.len() - k)` over all distinct values of `m`. Since this counts every bad pair twice, divide by `2` and return.
# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
use std::collections::HashMap;
impl Solution {
    pub fn count_bad_pairs(nums: Vec<i32>) -> i64 {
        let sum = nums.len() as i64;
        nums
            .into_iter()
            .enumerate()
            .map(|(i, v)| i as i32 - v)
            .fold(HashMap::<i32, i64>::new(), |mut map, x| {
                *map.entry(x).or_insert(0) += 1;
                map
            })
            .into_values()
            .map(|x| x * (sum - x))
            .sum::<i64>() / 2
    }
}
```