# Rust/Python just check counters. In py you can do in 1 line.

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6080248/](https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6080248/)

---

# Intuition

You can easily see that to successfully rearrange everything you need each chunk of `s2` to be the same as in `s1`. You can do this easily by putting all of them in a dictionary and count how many of them do you have. Then compare those two counters.

In python you can easily do this with Counter and list comprehension. And you can easily fit this in one line (which would hurt readability, but for some reason people like it).

# Complexity
- Time complexity: $O(n)$
- Space complexity:  $O(n)$

# Code
```python []
class Solution:
  def isPossibleToRearrange(self, s1: str, s2: str, k: int) -> bool:
    k = len(s1) // k
    s1 = Counter([s1[i:i + k] for i in range(0, len(s1), k)])
    s2 = Counter([s2[i:i + k] for i in range(0, len(s2), k)])
    return s1 == s2
```
```rust []
use std::collections::HashMap;

impl Solution {
  pub fn is_possible_to_rearrange(s1: String, s2: String, k: i32) -> bool {
    let k = s1.len() / k as usize;

    let count_chunks = |s: &String| -> HashMap<String, usize> {
      let mut counter = HashMap::new();
      for i in (0..s.len()).step_by(k) {
        let chunk = s[i..i + k].to_string();
        *counter.entry(chunk).or_insert(0) += 1;
      }
      counter
    };

    count_chunks(&s1) == count_chunks(&s2)
  }
}
```