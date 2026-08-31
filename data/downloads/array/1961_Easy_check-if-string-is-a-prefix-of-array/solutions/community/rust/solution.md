# Simple Rust Beats 100%

**Author:** PNT-SWS
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/6108259/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/6108259/)

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
    pub fn is_prefix_string(s: String, words: Vec<String>) -> bool {
        let mut ans = String::new();
        for word in &words{
            ans.push_str(word);
            if ans ==  s {
                return true;
            }
            if ans.len() > s.len() {
                return false;
            }
        }
        false
    }
}
```