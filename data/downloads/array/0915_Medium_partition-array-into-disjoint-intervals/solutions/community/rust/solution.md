# Simple rust solution

**Author:** N0fail
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/4676579/](https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/4676579/)

---

# Intuition
We need to find such index that maximum value in range `[0;index]` is less then minimum value in range `[index+1;n)`

# Approach
Store max value for range `[0;x]` in `maxs[x]`
Store min value for range `[x;n)` in `mins[x]`
Search for the first `x` that `mins[x+1] >= maxs[x]`
Return `x+1` since we need a length of left part

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
impl Solution {
    pub fn partition_disjoint(nums: Vec<i32>) -> i32 {
        let mut maxs: Vec<i32> = nums.clone();
        let mut mins: Vec<i32> = nums.clone();

        for idx in 1..maxs.len() {
            maxs[idx] = maxs[idx].max(maxs[idx-1]);
        }

        for idx in (0..mins.len()-1).rev() {
            mins[idx] = mins[idx].min(mins[idx+1]);
        }

        maxs[..maxs.len()-1]
            .iter()
            .enumerate()
            .zip(mins[1..].iter())
            .find(|((_idx, l), r)|  r >= l)
            .unwrap().0.0 as i32 + 1
    }
}
```