# Rust 0ms/Python 100ms. Linear solution with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/4011972/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/4011972/)

---

# Intuition

Lets look at some character at position $i$. With what characters can it be switched? With $i + 2$, $i + 4$, ... and also with $i - 2$, $i - 4$ and so on. So all the odd positions can be switch with each other. And the same for all the even positions. But Odd and Even can't interact.

So all we need is to check whether the multiset of all the odd positions in string1 is equal to multiset of odd positions at string2. And the same for the even positions

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn check_strings(s1: String, s2: String) -> bool {
    let mut d = vec![0; 28];
    let (s1, s2) = (s1.as_bytes(), s2.as_bytes());
    for i in (0..s1.len()).step_by(2) {
      d[s1[i] as usize - 97] += 1;
      d[s2[i] as usize - 97] -= 1;
    }

    for i in 0 .. 28 {
      if d[i] != 0 {
        return false;
      }
    }

    for i in (1..s1.len()).step_by(2) {
      d[s1[i] as usize - 97] += 1;
      d[s2[i] as usize - 97] -= 1;
    }

    for i in 0 .. 28 {
      if d[i] != 0 {
        return false;
      }
    }

    return true;
  }
}
```
```python []
class Solution:
  def checkStrings(self, s1: str, s2: str) -> bool:
    d = [0] * 28
    for i in range(0, len(s1), 2):
      d[ord(s1[i]) - 97] += 1
      d[ord(s2[i]) - 97] -= 1
    
    if any(v for v in d):
      return False
    
    for i in range(1, len(s1), 2):
      d[ord(s1[i]) - 97] += 1
      d[ord(s2[i]) - 97] -= 1
    
    return all(v == 0 for v in d)  
```