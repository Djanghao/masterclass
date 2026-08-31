# Rust, 2 steps, O(n)

**Author:** goodgoodwish
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solutions/2783385/](https://leetcode.com/problems/apply-operations-to-an-array/solutions/2783385/)

---

# Intuition
step 1: set 0.
step 2: move 0 to end.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 
O(n)

- Space complexity:
O(n)

# Code
```
impl Solution {
    pub fn apply_operations(nums: Vec<i32>) -> Vec<i32> {
        let mut nums = nums;
        let n = nums.len();
        let mut i = 0;
        while i < n - 1 {
            if nums[i] == nums[i+1] {
                nums[i] *= 2;
                nums[i+1] = 0;
                i += 2;
                continue
            }
            i += 1
        }
        let mut res = vec![];
        let mut zero_cnt = 0;
        for v in nums {
            if v == 0 {
                zero_cnt += 1;
                continue
            }
            res.push(v);
        }
        let zeros = [0].repeat(zero_cnt);
        res.extend(zeros);
        res
    }
}
```