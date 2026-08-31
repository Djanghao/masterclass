# Rust/Python linear solution constant space with explanation

**Author:** SalvadorDali
**Votes:** 2
**Link:** [https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/4477465/](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/4477465/)

---

# Intuition

As you can move characters anywhere in the words, you just need the number of times each character can you seen. Then if you have `x` number of times you seen a character then you just need to see whether you can divide them into $n$ words.

When you store character to counts, you can store them in a dictionary (like I have done in python). But it is better to store them in an array (like I have done in rust). Both are constant time, but constant is way smaller in array.

# Complexity
- Time complexity: $O(n)$, where n in the number of characters
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn make_equal(words: Vec<String>) -> bool {
    let mut cnt = [0; 26];
    let n = words.len();
    for w in words {
      for c in w.into_bytes() {
        cnt[c as usize - 97] += 1;
      }
    }
    
    for i in 0 .. 26 {
      if cnt[i] % n != 0 {
        return false;
      }
    }
    return true;
  }
}
```
```python []
from collections import defaultdict

class Solution:
  def makeEqual(self, words: List[str]) -> bool:
    cnt = defaultdict(int)
    for w in words:
      for c in w:
        cnt[c] += 1
    
    for v in cnt.values():
      if v % len(words):
        return False
    
    return True
```