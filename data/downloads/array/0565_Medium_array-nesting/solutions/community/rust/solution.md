# [Rust] dp

**Author:** bryceat
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-nesting/solutions/3292712/](https://leetcode.com/problems/array-nesting/solutions/3292712/)

---

# Intuition
If k was part of a previous loop we do not need to test it again because the cycles within the permuation are disjoint.

# Approach
Track which indicies have already been seen and the largest cycle seen so far.

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
impl Solution {
    pub fn array_nesting(nums: Vec<i32>) -> i32 {
        let mut unseen = vec![true;nums.len()];
        let mut best = 0_i32;
        let mut cur = 0_i32;
        for mut k in 0..nums.len() {
            while unseen[k] {
                cur += 1;
                unseen[k] = false;
                k = nums[k] as usize;
            }
            best = best.max(cur);
            cur = 0;
        }
        best
    }
}
```