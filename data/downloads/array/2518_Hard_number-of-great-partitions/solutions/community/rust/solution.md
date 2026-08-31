# rust solution beats 100%

**Author:** vang1ong7ang
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-great-partitions/solutions/3377047/](https://leetcode.com/problems/number-of-great-partitions/solutions/3377047/)

---

# Intuition

TODO

# Approach

DP

# Complexity
- Time complexity:
    $$
    O(n \	imes k)
    $$
- Space complexity:
    $$
    O(k)
    $$

# Code
```
impl Solution {
    pub fn count_partitions(nums: Vec<i32>, k: i32) -> i32 {
        let (m,n,k) = (1000000007_u32, nums.len(), k as usize);
        if nums.iter().map(|&v| v as usize).sum::<usize>() < k * 2 {0} else {(((0..n).fold(1, |y, _| y * 2 % m) + m * 2 - (1..n).fold((0..k).map(|i| 1 + u32::from((nums[0] as usize) <= i)).collect::<Vec<_>>(),|y, x|(0..k).map(|i| if i >= nums[x] as usize {(y[i] + y[i - nums[x] as usize]) % m} else {y[i]}).collect::<Vec<_>>())[k - 1] * 2)% m) as i32}
    }
}
```