# Rust/Python linear solution with explanation

**Author:** SalvadorDali
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4353271/](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4353271/)

---

# Intuition

All you need is to store how many times each character is seen in chars (you can use hashmap as in python or array like I do in Rust). Now for every word you calculate the same thing and then check if the value of each character is less counter from original `chars`.

If yes, then add the length to the result.


# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn count_characters(words: Vec<String>, chars: String) -> i32 {
    let mut cnt = [0; 26];
    for c in chars.as_bytes() {
      cnt[*c as usize - 97] += 1;
    }

    let mut res = 0;
    for w in words {
      let mut cnt_curr = [0; 26];
      for c in w.as_bytes() {
        cnt_curr[*c as usize - 97] += 1;
      }

      let mut is_ok = true;
      for i in 0 .. 26 {
        if cnt_curr[i] > cnt[i] {
          is_ok = false;
          break;
        }
      }

      if is_ok {
        res += w.len();
      }
    }

    return res as i32;
  }
}
```
```python []
from collections import Counter

class Solution:
  def countCharacters(self, words: List[str], chars: str) -> int:
    cnt, res = Counter(chars), 0
    
    for w in words:
      cnt_w = Counter(w)
      if all(c in cnt and cnt[c] >= cnt_w[c] for c in cnt_w):
        res += len(w)
          
    return res
```
