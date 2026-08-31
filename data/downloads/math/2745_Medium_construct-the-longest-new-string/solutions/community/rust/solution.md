# rust solution

**Author:** TimaGhostov
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-longest-new-string/solutions/4376125/](https://leetcode.com/problems/construct-the-longest-new-string/solutions/4376125/)

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
    pub fn longest_string(x: i32, y: i32, z: i32) -> i32 {
        let min = x.min(y);
        let max = x.max(y).min(min+1);

        2 * (min + max + z)
    }
}
```