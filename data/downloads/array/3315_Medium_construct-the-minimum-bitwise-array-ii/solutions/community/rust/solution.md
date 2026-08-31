# Rust bitwise

**Author:** Maxime002
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/solutions/5905028/](https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/solutions/5905028/)

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
```rust []
impl Solution {
    pub fn min_bitwise_array(nums: Vec<i32>) -> Vec<i32> {
        nums.into_iter().map(|n| 
            if n % 2 == 0 {
                -1 
            } else {
                n & !(1 << (n.trailing_ones() - 1))
            }
        ).collect()
    }
}
```