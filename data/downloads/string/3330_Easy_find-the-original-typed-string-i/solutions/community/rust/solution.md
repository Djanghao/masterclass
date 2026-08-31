# Rust/Python linear solution count number of consecutive characters

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-original-typed-string-i/solutions/6084723/](https://leetcode.com/problems/find-the-original-typed-string-i/solutions/6084723/)

---

# Intuition

If you have a string of `xxx...xx` of `n` consequitive symbols, you could have mistyped it `n - 1` times. And this is independent of all other mistypes of other consequitive characters. 

So you need just check how many consequitive characters can you find. 
And of course you could have not mistyped at all so add + 1 at the end.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```rust []
impl Solution {
  pub fn possible_string_count(word: String) -> i32 {
    let mut res = 1;
    let mut prev_c = 'A';

    for c in word.chars() {
      if c == prev_c {
        res += 1;
      } else {
        prev_c = c;
      }
    }

    res
  }
}
```
```python []
class Solution:
  def possibleStringCount(self, word: str) -> int:
    res, prev_c = 1, ''
    for c in word:
      if c == prev_c:
        res += 1
      else:
        prev_c = c
    return res
```