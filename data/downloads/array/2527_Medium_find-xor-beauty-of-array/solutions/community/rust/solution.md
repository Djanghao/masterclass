# You won't believe your eyes

**Author:** nisaacdz
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3070353/](https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3070353/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Rust []
impl Solution {
    pub fn xor_beauty(nums: Vec<i32>) -> i32 {
        nums.into_iter().fold(0, |acc, x| acc ^ x)
    }
}
```