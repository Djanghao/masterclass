# Rust DP

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/3802371/](https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/3802371/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn max_score(nums: Vec<i32>, x: i32) -> i64 {
        let mut data = vec![i32::MIN as i64; 2];
        let mut ret = nums[0] as i64;

        data[nums[0] as usize % 2] = nums[0] as i64;
        for i in 1 .. nums.len() {
            let k = nums[i] as usize % 2;
            let a = nums[i] as i64;
            data[k] = i64::max(data[k] + a, data[1 - k] + a - x as i64);
            ret = i64::max(ret, data[k]); 
        }

        ret
    }
}
```