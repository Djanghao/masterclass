# Rust | single line | 5ms

**Author:** user7454af
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/5604786/](https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/5604786/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(2^n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(2^n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// gray code

impl Solution {
    pub fn circular_permutation(n: i32, start: i32) -> Vec<i32> {
        (0..(1 << n)).map(|i| start ^ i ^ (i >> 1)).collect()
    }
}

```