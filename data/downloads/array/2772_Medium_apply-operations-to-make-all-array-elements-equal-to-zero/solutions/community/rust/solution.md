# Rust Prefix Sum

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/3742574/](https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/3742574/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
impl Solution {
    pub fn check_array(nums: Vec<i32>, k: i32) -> bool {
        let mut nums = nums;
        let (n, k) = (nums.len(), k as usize);
        let mut update = vec![0; n];
        let mut sum = 0;
        
        for i in 0 .. n {
            sum += update[i];
            let d = nums[i] + sum;
            if d < 0 { return false }
            if d > 0 {
                if i + k > n { return false }
                update[i] -= d;
                sum -= d;
                if i + k < n { update[i + k] += d; }
            }
        }
        
        true
    }
}
```