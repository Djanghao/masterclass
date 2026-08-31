# Rust/Python linear solution

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/5474289/](https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/5474289/)

---

# Intuition

Iterate over all:
- adjacent digits `s[i], s[i + 1]`
- check that they have same parity `int(s[i]) % 2 == int(s[i + 1]) % 2`
- first bigger than other `int(s[i]) > int(s[i + 1])`

If yes, just swap them and return

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```Python []
class Solution:
  def getSmallestString(self, s: str) -> str:
    s = list(s)
    for i in range(len(s) - 1):
      if int(s[i]) % 2 == int(s[i + 1]) % 2 and int(s[i]) > int(s[i + 1]):
        s[i], s[i + 1] = s[i + 1], s[i]
        break
        
    return ''.join(s)
        
```
```Rust []
impl Solution {
  pub fn get_smallest_string(s: String) -> String {
    let mut s = s.as_bytes().to_vec();
    
    for i in 0 .. s.len() - 1 {
      if (s[i] % 2 == s[i + 1] % 2) && (s[i] > s[i + 1]) {
        s.swap(i, i + 1);
        break;
      }
    }
    
    return String::from_utf8(s).unwrap();
  }
}
```