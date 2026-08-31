# iter.map

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/5723323/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/5723323/)

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
  pub fn is_acronym(words: Vec<String>, s: String) -> bool {
    words.iter().map(|s| {
      s.chars().next().unwrap()
    }).collect::<String>() == s
  }
}
```