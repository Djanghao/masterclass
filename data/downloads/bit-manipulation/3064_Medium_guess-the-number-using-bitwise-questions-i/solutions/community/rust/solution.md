# Simple Rust solution beats 100%

**Author:** sedrakpc
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/5077875/](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/5077875/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```
/** 
 * Definition of commonSetBits API.
 * unsafe fn common_set_bits(num: i32) -> i32 {}
 */

impl Solution {
    unsafe fn find_number() -> i32 {
        let mut n = 0;
        for i in 0..32 {
            if common_set_bits(1 << i) == 1 {
                n |= 1 << i;
            }
        }
        return n;
    }
}
```