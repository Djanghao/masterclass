# O(n) simplest solution

**Author:** lavender128
**Votes:** 2
**Link:** [https://leetcode.com/problems/house-robber-ii/solutions/5738051/](https://leetcode.com/problems/house-robber-ii/solutions/5738051/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
    pub fn rob(nums: Vec<i32>) -> i32 {
        if nums.len() == 1 {
            nums[0]
        } else {
            let mut sol1 = nums[0]; 
            let mut sol2 = 0;
            let mut sol3 = 0;
            let mut sol4 = 0;
            for i in &nums[1..nums.len() - 1] {
                let tmp1 = sol1;
                sol1 = sol2 + i;
                sol2 = sol2.max(tmp1);
                let tmp2 = sol3;
                sol3 = sol4 + i;
                sol4 = sol4.max(tmp2);
            }
            sol4 += nums[nums.len() - 1];
            sol1.max(sol2).max(sol3).max(sol4)
        }
    }
}
```