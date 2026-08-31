# readable or not

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/5830722/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/5830722/)

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

use std::collections::HashSet;

impl Solution {
  pub fn is_substring_present(s: String) -> bool {
    let rev: String = s.chars().rev().collect(); // instead of Vec<char>.reverse()
    let hs: HashSet<_> = s.chars().collect::<Vec<_>>().windows(2).map(|pr| pr.iter().collect::<String>()).collect();
    rev.chars().collect::<Vec<_>>().windows(2).any(|r_v| hs.contains(&r_v.iter().collect::<String>())) // TIL: any returns a bool looks for 1 true
  }
}
```