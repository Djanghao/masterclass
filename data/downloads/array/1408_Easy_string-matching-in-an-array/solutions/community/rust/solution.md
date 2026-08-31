# Rust Brute Force Approach

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-matching-in-an-array/solutions/5767875/](https://leetcode.com/problems/string-matching-in-an-array/solutions/5767875/)

---

# Complexity
- Time complexity: $$O(n^2)$$
- Space complexity: $$O(n)$$

# Code
```rust []
use std::collections::HashSet;

impl Solution {
  pub fn string_matching(words: Vec<String>) -> Vec<String> {
    let words_set: HashSet<_> = words.into_iter().collect();
    let mut res_set = HashSet::new();

    for word in words_set.iter().cloned() {
      for w in words_set.iter().cloned() {
        if w != word && w.contains(&word) {
          res_set.insert(word.to_string());
        }
      }
    }

    res_set.into_iter().collect()
  }
}
```