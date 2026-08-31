# Rust | 0ms | beats 100%

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/5385483/](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/5385483/)

---

# Complexity
- Time complexity: $$O(n^2 * |target|)$$

- Space complexity: $$O(1)$$

# Code
```
impl Solution {
    pub fn num_of_pairs(nums: Vec<String>, target: String) -> i32 {
        let mut ans = 0;
        for i in 0..nums.len()-1 {
            for j in i+1..nums.len() {
                if nums[i].len() + nums[j].len() == target.len() {
                    if target[..nums[i].len()] == nums[i] && target[nums[i].len()..] == nums[j] {
                        ans += 1;
                    }
                    if target[..nums[j].len()] == nums[j] && target[nums[j].len()..] == nums[i] {
                        ans += 1;
                    }
                }
            }
        }
        ans
    }
}
```